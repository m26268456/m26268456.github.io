// --- 全局變數/資料 ---
let cards = [
    {
        name: "FLY GO卡",
        cardNote: "四捨五入\n入帳日隔天回饋 ~12/31",
        groups: [
            { name: "好好刷", groupNote: "", rewards: [{merchant: "7-11", percent: 3.0, note: ""}, {merchant: "全家", percent: 3.0, note: ""}, {merchant: "萊爾富", percent: 3.0, note: ""}] },
            { name: "爽爽刷", groupNote: "指定通路最高 10%", rewards: [{merchant: "Uber", percent: 10.0, note: "需登錄"}, {merchant: "IKEA", percent: 10.0, note: "限量"}] },
            { name: "出門刷", groupNote: "", rewards: [{merchant: "海外", percent: 5.0, note: ""}, {merchant: "Airbnb", percent: 5.0, note: ""}] }
        ]
    },
    {
        name: "UBEAR卡",
        cardNote: "",
        groups: [
            { name: "指定通路", groupNote: "當期帳單", rewards: [{merchant: "Uber", percent: 2.0, note: "需登錄"}, {merchant: "7-11", percent: 2.0, note: ""}, {merchant: "IKEA", percent: 2.0, note: ""}] }
        ]
    }
];
let commonMerchants = ["7-11", "蝦皮", "全聯", "IKEA", "Uber"];
let editingCardIndex = -1;

// --- 拖曳邏輯的核心函式 ---
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.card-button, .merchant-button:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2; 
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function handleDragStart(e) {
    e.target.classList.add('dragging');
    e.dataTransfer.setData('text/plain', e.target.textContent);
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    const container = e.currentTarget;
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggingElement = container.querySelector('.dragging');

    if (afterElement == null) {
        container.appendChild(draggingElement);
    } else {
        container.insertBefore(draggingElement, afterElement);
    }
}

function handleDrop(e) {
    e.preventDefault();
    const container = e.currentTarget;
    const draggingElement = container.querySelector('.dragging');

    if (!draggingElement) return;

    const newOrderNames = [...container.querySelectorAll('.card-button, .merchant-button')].map(btn => btn.textContent.trim());

    if (draggingElement.classList.contains('merchant-button')) {
        commonMerchants = newOrderNames;
    } else if (draggingElement.classList.contains('card-button')) {
        const newCardOrder = newOrderNames.map(name => cards.find(c => c.name === name));
        cards = newCardOrder;
    }

    renderMerchantButtons();
    renderCardButtons();
}

// --- 渲染與初始化 ---

function renderCardButtons() {
    const container = document.getElementById("allCardsButtons");
    container.innerHTML = "";
    cards.forEach(card => {
        const button = document.createElement("button");
        button.className = "card-button";
        button.textContent = card.name;
        button.onclick = () => quickSearch(card.name, true);
        button.setAttribute('draggable', true);
        button.addEventListener('dragstart', handleDragStart);
        button.addEventListener('dragend', handleDragEnd);
        container.appendChild(button);
    });
    container.addEventListener('dragover', handleDragOver);
    container.addEventListener('drop', handleDrop);
}

function renderMerchantButtons() {
    const container = document.getElementById("commonMerchants");
    container.innerHTML = "";
    commonMerchants.forEach(merchant => {
        const button = document.createElement("button");
        button.className = "merchant-button";
        button.textContent = merchant;
        button.onclick = () => quickSearch(merchant);
        button.setAttribute('draggable', true);
        button.addEventListener('dragstart', handleDragStart);
        button.addEventListener('dragend', handleDragEnd);
        container.appendChild(button);
    });
    container.addEventListener('dragover', handleDragOver);
    container.addEventListener('drop', handleDrop);
}

function init() {
    renderCardButtons();
    renderMerchantButtons();
    setMainContentPadding();
    document.getElementById("search").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchMerchant();
        }
    });
}

function setMainContentPadding() {
    const headerContent = document.getElementById('fixed-header-content');
    const mainContent = document.getElementById('main-content');
    
    const headerHeight = headerContent.offsetHeight; 
    mainContent.style.paddingTop = `${headerHeight + 20}px`; 
}

window.addEventListener('resize', setMainContentPadding);
window.addEventListener('load', setMainContentPadding);

// --- 核心功能函式 ---

function searchMerchant(keywordOverride = null, isCardQuery = false) {
    const keyword = keywordOverride || document.getElementById("search").value.trim();
    const resultDiv = document.getElementById("searchResult");
    document.getElementById("search").value = keyword; 
    
    if (!keyword || isCardQuery) {
        if (isCardQuery) {
            const card = cards.find(c => c.name === keyword);
            if (card) {
                displayCardDetail(card);
            } else {
                 resultDiv.innerHTML = `<p>查無卡片 "${keyword}" 的詳細資訊。</p>`;
            }
        } else {
            resultDiv.innerHTML = "<p>請輸入通路名稱，或點選上方的卡片/常用通路按鈕進行查詢。</p>";
        }
        return;
    }

    const lowerKeyword = keyword.toLowerCase();
    let merchantMatches = []; 
    // Map<CardName, Set<MatchTypeString>>
    let noteOnlyCardsMap = new Map(); 
    let merchantMatchedCardNames = new Set(); 
    
    cards.forEach(card => {
        const cardNoteMatch = card.cardNote.toLowerCase().includes(lowerKeyword);
        
        // 1. 檢查卡片層級註解匹配
        if (cardNoteMatch) {
            if (!noteOnlyCardsMap.has(card.name)) {
                noteOnlyCardsMap.set(card.name, new Set());
            }
            noteOnlyCardsMap.get(card.name).add("卡片註解");
        }

        card.groups.forEach(group => {
            const groupNoteMatch = group.groupNote.toLowerCase().includes(lowerKeyword);
            
            // 2. 檢查權益組層級註解匹配
            if (groupNoteMatch) {
                if (!noteOnlyCardsMap.has(card.name)) {
                    noteOnlyCardsMap.set(card.name, new Set());
                }
                noteOnlyCardsMap.get(card.name).add("權益組註解");
            }

            group.rewards.forEach(r => {
                const merchantMatch = r.merchant.toLowerCase().includes(lowerKeyword);
                const rewardNoteMatch = r.note.toLowerCase().includes(lowerKeyword);
                
                // 3. 檢查通路名稱匹配 (優先級最高，使用詳細結果)
                if (merchantMatch) {
                    merchantMatches.push({
                        card: card.name, 
                        group: group.name, 
                        merchant: r.merchant, 
                        percent: r.percent, 
                        note: r.note,
                    });
                    merchantMatchedCardNames.add(card.name);
                } 
                // 4. 檢查回饋項目註解匹配，但必須確保不是通路名稱匹配 (純註解)
                else if (rewardNoteMatch) {
                    if (!noteOnlyCardsMap.has(card.name)) {
                        noteOnlyCardsMap.set(card.name, new Set());
                    }
                    noteOnlyCardsMap.get(card.name).add("回饋註解");
                }
            });
        });
    });

    // 排除重複：如果卡片已出現在詳細的通路匹配結果中，則從純註解列表中移除
    merchantMatchedCardNames.forEach(cardName => noteOnlyCardsMap.delete(cardName));
    
    // 轉換 Map 為 Array 並排序
    const finalNoteCards = Array.from(noteOnlyCardsMap).sort((a, b) => a[0].localeCompare(b[0]));
    
    // --- 顯示結果邏輯 ---
    resultDiv.innerHTML = "";
    
    if (merchantMatches.length === 0 && finalNoteCards.length === 0) {
        resultDiv.innerHTML = `<p>查無與 "${keyword}" 相關的回饋結果</p>`;
        return;
    }
    
    // A. 顯示簡化的卡片清單 (純註解匹配)
    if (finalNoteCards.length > 0) {
        const noteHeader = document.createElement("h3");
        noteHeader.textContent = `[註解匹配] 相關卡片 (${finalNoteCards.length} 張): 搜尋關鍵字: "${keyword}"`;
        noteHeader.style.color = '#800080';
        resultDiv.appendChild(noteHeader);
        
        const noteListDiv = document.createElement("div");
        noteListDiv.style.marginBottom = '20px';
        noteListDiv.style.padding = '10px';
        noteListDiv.style.border = '1px solid #e6e6fa';
        noteListDiv.style.borderRadius = '4px';
        
        finalNoteCards.forEach(([cardName, matchTypes]) => {
            const div = document.createElement("div");
            div.className = "note-match-card";
            const matchTypesString = Array.from(matchTypes).join(', ');
            
            div.innerHTML = `
                <span>${cardName}</span>
                <span class="note-match-types">匹配類型: ${matchTypesString}</span>
            `;
            noteListDiv.appendChild(div);
        });
        resultDiv.appendChild(noteListDiv);
    }
    
    // B. 顯示詳細的通路回饋清單 (通路名稱匹配)
    if (merchantMatches.length > 0) {
        const merchantHeader = document.createElement("h3");
        merchantHeader.textContent = `[通路匹配] 詳細回饋結果 (${merchantMatches.length} 筆): 搜尋關鍵字: "${keyword}"`;
        merchantHeader.style.color = '#333';
        resultDiv.appendChild(merchantHeader);

        // 依回饋比例排序
        merchantMatches.sort((a, b) => b.percent - a.percent); 
        
        merchantMatches.forEach(r => {
            
            const highlightKeyword = (text) => text.replace(new RegExp(keyword, 'gi'), match => `<span class="highlight">${match}</span>`);

            // 通路名稱高亮
            r.merchant = highlightKeyword(r.merchant);
            
            // 回饋註解高亮 (如果註解也包含關鍵字，雖然是以通路匹配為主，但仍可高亮顯示)
            let noteText = r.note ? ` (<span style="color: blue; font-weight: normal;">${highlightKeyword(r.note)}</span>)` : ''; 

            const div = document.createElement("div");
            div.className = "card";
            div.style.border = '1px solid #ddd';
            div.style.padding = '10px';
            div.style.marginBottom = '8px';
            div.innerHTML = `
                <strong>${r.card}</strong> - 
                <span style="color: #ff9900;">${r.group}</span> - 
                ${r.merchant}: 
                <strong style="color: green;">${r.percent}%</strong>
                ${noteText}
            `;
            resultDiv.appendChild(div);
        });
    }
}

function displayCardDetail(card) {
    const resultDiv = document.getElementById("searchResult");
    resultDiv.innerHTML = "";

    const detailDiv = document.createElement("div");
    detailDiv.className = "card-detail-view";
    detailDiv.innerHTML = `<h3>${card.name} 詳情</h3>`;
    
    if (card.cardNote) {
        detailDiv.innerHTML += `<div class="card-note-large">${card.cardNote}</div>`;
    }

    card.groups.forEach(group => {
        const groupDiv = document.createElement("div");
        groupDiv.className = "reward-group-display";
        groupDiv.innerHTML = `<strong>${group.name}</strong>`;
        
        if (group.groupNote) {
            groupDiv.innerHTML += `<div class="reward-group-note">${group.groupNote}</div>`;
        }

        group.rewards.forEach(r => {
            const noteText = r.note ? ` (<span style="color: blue;">${r.note}</span>)` : '';
            groupDiv.innerHTML += `<p>• ${r.merchant}: <strong style="color: green;">${r.percent}%</strong>${noteText}</p>`;
        });
        detailDiv.appendChild(groupDiv);
    });

    resultDiv.appendChild(detailDiv);
}

function quickSearch(name, isCardQuery = false) {
    document.getElementById("search").value = name;
    searchMerchant(name, isCardQuery);
}

function showMerchantManagerModal() {
    const container = document.getElementById("modalMerchantContainer");
    container.innerHTML = '';
    commonMerchants.forEach((merchant) => {
        const div = document.createElement("div");
        div.className = "merchant-item";
        // 注意：這裡的 style 應改寫入 CSS，但保留原版邏輯
        div.innerHTML = `<input type="text" value="${merchant}" class="modal-merchant-name" style="width: 80%; padding: 8px 12px; margin: 5px 0;"><button onclick="this.parentNode.remove()">移除</button>`;
        container.appendChild(div);
    });
    document.getElementById("merchantModal").style.display = "block";
}

function addCommonMerchant() {
    const input = document.getElementById("newMerchantInput");
    const newMerchant = input.value.trim();
    if (!newMerchant) return;
    const container = document.getElementById("modalMerchantContainer");
    const div = document.createElement("div");
    div.className = "merchant-item";
    div.innerHTML = `<input type="text" value="${newMerchant}" class="modal-merchant-name" style="width: 80%; padding: 8px 12px; margin: 5px 0;"><button onclick="this.parentNode.remove()">移除</button>`;
    container.appendChild(div);
    input.value = '';
}

function saveCommonMerchants() {
    const updatedMerchants = [];
    document.querySelectorAll("#modalMerchantContainer .modal-merchant-name").forEach(input => {
        const merchant = input.value.trim();
        if (merchant && !updatedMerchants.includes(merchant)) {
            updatedMerchants.push(merchant);
        }
    });
    commonMerchants = updatedMerchants;
    renderMerchantButtons();
    closeModal('merchantModal');
}

function showCardManagerModal() {
    const listContainer = document.getElementById("cardEditList");
    listContainer.innerHTML = '';
    cards.forEach((card, index) => {
        const div = document.createElement("div");
        div.className = "card-edit-list-item";
        div.innerHTML = `
            <span>${card.name}</span>
            <div>
                <button class="edit-btn" onclick="showEditModal(${index})">編輯</button>
                <button class="delete-btn" onclick="deleteCard(${index})">刪除</button>
            </div>
        `;
        listContainer.appendChild(div);
    });
    document.getElementById("cardManagerModal").style.display = "block";
}

function showEditModal(cardIndex) {
    editingCardIndex = cardIndex;
    document.getElementById("cardManagerModal").style.display = "none"; 
    const container = document.getElementById("modalRewardsGroupContainer");
    container.innerHTML = '';
    let cardData = { name: '', cardNote: '', groups: [] };
    if (cardIndex === -1) {
        document.getElementById("modalTitle").textContent = "新增卡片";
        addModalRewardGroup(); 
    } else {
        cardData = JSON.parse(JSON.stringify(cards[cardIndex]));
        document.getElementById("modalTitle").textContent = `編輯卡片: ${cardData.name}`;
        cardData.groups.forEach((group, groupIndex) => { addModalRewardGroup(group.name, group.groupNote, group.rewards, groupIndex); });
        if (cardData.groups.length === 0) { addModalRewardGroup(); }
    }
    document.getElementById("modalCardName").value = cardData.name;
    document.getElementById("modalCardNote").value = cardData.cardNote;
    document.getElementById("cardModal").style.display = "block";
}

function addModalRewardGroup(groupName = '', groupNote = '', rewards = [], groupIndex = -1) {
    const container = document.getElementById("modalRewardsGroupContainer");
    const groupDiv = document.createElement("div");
    groupDiv.className = "reward-group-item";
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    // 注意：這裡的 style 應改寫入 CSS，但保留原版邏輯
    header.innerHTML = `<input type="text" value="${groupName}" placeholder="權益組名稱 (ex: 好好刷)" class="modal-group-name" style="width: 45%;"><input type="text" value="${groupNote}" placeholder="權益組註解 (ex: 需登錄)" class="modal-group-note" style="width: 45%;"><button style="background: #e66; margin: 0;" onclick="this.parentNode.parentNode.remove()">移除權益組</button>`;
    groupDiv.appendChild(header);
    const rewardsContainer = document.createElement('div');
    rewardsContainer.className = 'rewards-sub-container';
    rewardsContainer.style.marginTop = '10px';
    groupDiv.appendChild(rewardsContainer);
    const addRewardBtn = document.createElement('button');
    addRewardBtn.textContent = '新增回饋項目';
    addRewardBtn.style.backgroundColor = '#607d8b'; // 注意：這裡的 style 應改寫入 CSS，但保留原版邏輯
    addRewardBtn.onclick = () => addModalReward(rewardsContainer);
    groupDiv.appendChild(addRewardBtn);
    if (rewards.length > 0) {
        rewards.forEach(r => addModalReward(rewardsContainer, r.merchant, r.percent, r.note));
    } else { addModalReward(rewardsContainer); }
    container.appendChild(groupDiv);
}

function addModalReward(container, merchant = '', percent = '', note = '') {
    const div = document.createElement("div");
    div.className = "reward-item";
    // 注意：這裡的 style 應改寫入 CSS，但保留原版邏輯
    div.innerHTML = `<input type="text" value="${merchant}" placeholder="通路名稱" class="modal-merchant" style="width: 25%;"><input type="number" value="${percent}" placeholder="回饋 %" step="0.1" class="modal-percent" style="width: 15%;"><input type="text" value="${note}" placeholder="附註 (ex: 限量)" class="modal-note" style="width: 40%;"><button onclick="this.parentNode.remove()">移除</button>`;
    container.appendChild(div);
}

function saveCard() {
    const cardName = document.getElementById("modalCardName").value.trim();
    const cardNote = document.getElementById("modalCardNote").value.trim();
    if (!cardName) { alert("卡片名稱不能為空"); return; }
    const groups = [];
    const groupItems = document.querySelectorAll("#modalRewardsGroupContainer .reward-group-item");
    let isValid = true;
    groupItems.forEach(groupItem => {
        const groupName = groupItem.querySelector(".modal-group-name").value.trim();
        const groupNote = groupItem.querySelector(".modal-group-note").value.trim();
        const rewards = [];
        if (!groupName) { alert("請為所有權益組命名。"); isValid = false; return; }
        const rewardItems = groupItem.querySelectorAll(".reward-item");
        rewardItems.forEach(item => {
            const merchant = item.querySelector(".modal-merchant").value.trim();
            const percent = parseFloat(item.querySelector(".modal-percent").value);
            const note = item.querySelector(".modal-note").value.trim();
            if (merchant && !isNaN(percent)) {
                rewards.push({ merchant, percent, note });
            } else if (merchant || !isNaN(percent)) {
                alert(`權益組 [${groupName}] 中有未填寫完整的項目。請移除或填寫完整。`);
                isValid = false;
            }
        });
        if (rewards.length > 0) { groups.push({ name: groupName, groupNote: groupNote, rewards: rewards }); }
    });
    if (!isValid) return;
    let newCardData = { name: cardName, cardNote: cardNote, groups: groups };
    if (editingCardIndex === -1) { cards.push(newCardData); } 
    else { cards[editingCardIndex] = newCardData; }
    closeModal('cardModal');
    renderCardButtons(); 
}

function deleteCard(cardIndex) {
     if (confirm(`確定要刪除卡片 ${cards[cardIndex].name} 及其所有回饋嗎?`)) {
        cards.splice(cardIndex, 1);
        showCardManagerModal(); 
        renderCardButtons();
     }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    if (modalId === 'cardModal') { showCardManagerModal(); }
}

// 初始化執行
init();