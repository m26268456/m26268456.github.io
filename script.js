const DEFAULT_CARDS = [
    {
        name: "Richart卡",
        isToggleCard: true,
        cardNote: "~12/31 <a href='https://reurl.cc/bmrG6M' target='_blank'>詳情</a>\n單筆計算 無條件捨去 入帳日次二營業日回饋\n須設定台新帳戶扣繳台新信用卡帳款",
        groups: [
            { 
                name: "一般消費", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [{ merchant: "一般消費", percent: 0.3, note: "" }] 
            },
            { 
                name: "保費", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [{ merchant: "保費", percent: 1.3, note: "免登錄" }] 
            },
            { 
                name: "Pay著刷", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [
                    { merchant: "台新Pay", percent: 3.8, note: "" },
                    { merchant: "台灣Pay(TWQR)", percent: 3.8, note: "" }
                ]
            },
            { 
                name: "天天刷", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [
                    { merchant: "7-11", percent: 3.3, note: "限台新Pay" },
                    { merchant: "全家", percent: 3.3, note: "限台新Pay" },
                    { merchant: "家樂福", percent: 3.3, note: "含線上、超市；不含美食街、商店街" },
                    { merchant: "大買家", percent: 3.3, note: "含線上；不含美食街、商店街" },
                    { merchant: "台鐵(台灣鐵路)", percent: 3.3, note: "注意台灣鐵路與台灣高鐵差異#" },
                    { merchant: "高鐵(台灣高鐵)", percent: 3.3, note: "注意台灣鐵路與台灣高鐵差異#" },
                    { merchant: "台灣大車隊(55688)", percent: 3.3, note: "" },
                    { merchant: "LINEGO", percent: 3.3, note: "" },
                    { merchant: "Yoxi", percent: 3.3, note: "" },
                    { merchant: "Uber", percent: 3.3, note: "" },
                    { merchant: "嘟嘟房", percent: 3.3, note: "" },
                    { merchant: "Autopass(車麻吉)", percent: 3.3, note: "" },
                    { merchant: "城市車旅", percent: 3.3, note: "" },
                    { merchant: "ViViPark", percent: 3.3, note: "" },
                    { merchant: "USPACE", percent: 3.3, note: "" },
                    { merchant: "UDRIVE", percent: 3.3, note: "" },
                    { merchant: "iRent", percent: 3.3, note: "" },
                    { merchant: "和運租車", percent: 3.3, note: "" },
                    { merchant: "格上租車", percent: 3.3, note: "" }
                ] 
            },
            { 
                name: "大筆刷", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [
                    { merchant: "新光三越", percent: 3.3, note: "" },
					{ merchant: "遠東SOGO", percent: 3.3, note: "" },
					{ merchant: "廣三SOGO", percent: 3.3, note: "" },
					{ merchant: "遠東百貨", percent: 3.3, note: "" },
					{ merchant: "微風", percent: 3.3, note: "" },
					{ merchant: "台北101", percent: 3.3, note: "" },
					{ merchant: "遠東巨城", percent: 3.3, note: "" },
					{ merchant: "南紡購物中心", percent: 3.3, note: "" },
					{ merchant: "漢神百貨", percent: 3.3, note: "" },
					{ merchant: "漢神巨蛋", percent: 3.3, note: "" },
					{ merchant: "誠品生活", percent: 3.3, note: "" },
					{ merchant: "Mitsui Shopping Park LaLaport", percent: 3.3, note: "南港/台中" },
					{ merchant: "MITSUI OUTLET PARK", percent: 3.3, note: "林口、台中港、台南" },
					{ merchant: "華泰名品城", percent: 3.3, note: "" },
					{ merchant: "SKM Park Outlets", percent: 3.3, note: "" },
					{ merchant: "IKEA", percent: 3.3, note: "含線上" },
					{ merchant: "特力屋", percent: 3.3, note: "含線上" },
					{ merchant: "HOLA", percent: 3.3, note: "含線上" },
					{ merchant: "宜得利", percent: 3.3, note: "含線上" },
					{ merchant: "瑪黑家居", percent: 3.3, note: "含線上" }
                ] 
            },
            { 
                name: "好饗刷", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [
                    { merchant: "全台餐飲", percent: 3.3, note: "不含餐券、小額支付" },
					{ merchant: "Uber Eats", percent: 3.3, note: "" },
					{ merchant: "Foodpanda", percent: 3.3, note: "" },
					{ merchant: "拓元售票", percent: 3.3, note: "" },
					{ merchant: "KKTIX", percent: 3.3, note: "" },
					{ merchant: "年代售票", percent: 3.3, note: "" },
					{ merchant: "寬宏售票", percent: 3.3, note: "" },
					{ merchant: "OPENTIX兩廳院文化生活", percent: 3.3, note: "" },
					{ merchant: "指定飯店", percent: 3.3, note: "不含餐券、住宿券" },
					{ merchant: "指定樂園", percent: 3.3, note: "" },
					{ merchant: "中油直營", percent: 3.3, note: "" },
					{ merchant: "台亞", percent: 3.3, note: "" },
					{ merchant: "全國加油", percent: 3.3, note: "" },
					{ merchant: "源點EVOASIS", percent: 3.3, note: "" },
					{ merchant: "華城電能EVALUE", percent: 3.3, note: "" }
                ] 
            },
            { 
                name: "數刷趣", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [
                    { merchant: "蝦皮(Shopee)", percent: 3.3, note: "不含貴金屬、遊戲點數、票券" },
					{ merchant: "momo", percent: 3.3, note: "" },
					{ merchant: "酷澎(Coupang)", percent: 3.3, note: "" },
					{ merchant: "PChome", percent: 3.3, note: "不含儲值、電子票券" },
					{ merchant: "Yahoo", percent: 3.3, note: "" },
					{ merchant: "Amazon", percent: 3.3, note: "" },
					{ merchant: "東森(東森購物)", percent: 3.3, note: "" },
					{ merchant: "博客來", percent: 3.3, note: "" },
					{ merchant: "Richart Mart", percent: 3.3, note: "" },
					{ merchant: "Hahow", percent: 3.3, note: "" },
					{ merchant: "PressPlay", percent: 3.3, note: "" },
					{ merchant: "Amazing Talker", percent: 3.3, note: "" },
					{ merchant: "Udemy", percent: 3.3, note: "" },
					{ merchant: "Kobo", percent: 3.3, note: "" },
					{ merchant: "Readmoo", percent: 3.3, note: "" },
					{ merchant: "UNIQLO", percent: 3.3, note: "不含百貨店中店" },
					{ merchant: "GU", percent: 3.3, note: "不含百貨店中店" },
					{ merchant: "ZARA", percent: 3.3, note: "不含百貨店中店" },
					{ merchant: "NET", percent: 3.3, note: "不含百貨店中店" },
					{ merchant: "lativ", percent: 3.3, note: "不含百貨店中店" },
					{ merchant: "GAP", percent: 3.3, note: "不含百貨店中店" }
                ] 
            },
            { 
                name: "玩旅刷", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [
                    { merchant: "海外消費", percent: 3.3, note: "含實體及線上，消費地為國外、或幣別非台幣" },
					{ merchant: "華航(中華航空)", percent: 3.3, note: "" },
					{ merchant: "長榮", percent: 3.3, note: "" },
					{ merchant: "星宇", percent: 3.3, note: "" },
					{ merchant: "虎航(台灣虎航)", percent: 3.3, note: "" },
					{ merchant: "國泰航空", percent: 3.3, note: "" },
					{ merchant: "華信", percent: 3.3, note: "" },
					{ merchant: "立榮", percent: 3.3, note: "" },
					{ merchant: "Klook", percent: 3.3, note: "" },
					{ merchant: "KKday", percent: 3.3, note: "" },
					{ merchant: "AIRSIM", percent: 3.3, note: "" },
					{ merchant: "Agoda", percent: 3.3, note: "" },
					{ merchant: "Booking.com", percent: 3.3, note: "" },
					{ merchant: "Trip.com", percent: 3.3, note: "" },
					{ merchant: "Airbnb", percent: 3.3, note: "" },
					{ merchant: "Hotels.com", percent: 3.3, note: "" },
					{ merchant: "Expedia", percent: 3.3, note: "" },
					{ merchant: "雄獅旅遊", percent: 3.3, note: "" },
					{ merchant: "易遊網", percent: 3.3, note: "" },
					{ merchant: "東南旅遊", percent: 3.3, note: "" }
                ] 
            },
            { 
                name: "假日刷", 
                needsToggle: true, 
                groupNote: "限節假日", 
                rewards: [
                    { merchant: "一般消費", percent: 2.0, note: "限實體卡、LINE Pay、街口支付、台新Pay、Google 錢包" },
					{ merchant: "LINE Pay", percent: 2.0, note: "限節假日" },
					{ merchant: "街口支付", percent: 2.0, note: "限節假日" },
					{ merchant: "台新 Pay", percent: 2.0, note: "限節假日" }
                ] 
            }
        ]
    },
    {
        name: "CUBE卡",
        isToggleCard: true,
        cardNote: "~12/31 <a href='https://reurl.cc/bmrGnd' target='_blank'>詳情</a>\n單筆計算 四捨五入 入帳日次二營業日回饋",
        groups: [
            { 
                name: "一般消費", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [{ merchant: "一般消費", percent: 0.3, note: "" }] 
            },
            { 
                name: "玩數位", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [
                    { merchant: "ChatGPT", percent: 3.0, note: "" },
					{ merchant: "Canva", percent: 3.0, note: "" },
					{ merchant: "Claude", percent: 3.0, note: "" },
					{ merchant: "Cursor", percent: 3.0, note: "" },
					{ merchant: "Duolingo(多鄰國)", percent: 3.0, note: "" },
					{ merchant: "Gamma", percent: 3.0, note: "" },
					{ merchant: "Gemini", percent: 3.0, note: "" },
					{ merchant: "Notion", percent: 3.0, note: "" },
					{ merchant: "Perplexity", percent: 3.0, note: "" },
					{ merchant: "Speak", percent: 3.0, note: "" },
					{ merchant: "Apple 媒體服務", percent: 3.0, note: "不含 Apple Store 之交易" },
					{ merchant: "Google Play", percent: 3.0, note: "" },
					{ merchant: "Disney+", percent: 3.0, note: "" },
					{ merchant: "Netflix", percent: 3.0, note: "" },
					{ merchant: "Spotify", percent: 3.0, note: "" },
					{ merchant: "KKBOX", percent: 3.0, note: "" },
					{ merchant: "YouTube Premium", percent: 3.0, note: "" },
					{ merchant: "Max", percent: 3.0, note: "" },
					{ merchant: "蝦皮購物(Shopee)", percent: 3.0, note: "不含貴金屬、珠寶、遊戲點數、各類實體或電子票券" },
					{ merchant: "momo購物", percent: 3.0, note: "" },
					{ merchant: "PChome 24h購物", percent: 3.0, note: "不含儲值及電子票券" },
					{ merchant: "小樹購", percent: 3.0, note: "不含電子票券" },
					{ merchant: "Coupang 酷澎", percent: 3.0, note: "" },
					{ merchant: "淘寶", percent: 3.0, note: "" },
					{ merchant: "天貓", percent: 3.0, note: "" }
                ] 
            },
            { 
                name: "樂饗購", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [
                    { merchant: "國內指定百貨", percent: 3.0, note: "不含店中櫃" },
					{ merchant: "Uber Eats", percent: 3.0, note: "不含Uber One會員" },
					{ merchant: "foodpanda", percent: 3.0, note: "" },
					{ merchant: "國內餐飲", percent: 3.0, note: "含小額支付；不含餐券、飯店/酒店/旅館/KTV/酒吧/俱樂部/商場等所設立之餐廳、夜總會、菸酒販賣商" },
					{ merchant: "麥當勞", percent: 3.0, note: "不含百貨、車站商場、機場美食街、國道服務區美食街等門市" },
					{ merchant: "康是美", percent: 3.0, note: "含線上；不含貴金屬、儲值、票券、百貨、商場門市" },
					{ merchant: "屈臣氏", percent: 3.0, note: "含線上；不含百貨、商場門市" }
                ] 
            },
            { 
                name: "趣旅行", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [
                    { merchant: "大阪萬國博覽會官網", percent: 3.0, note: "" },
					{ merchant: "SURUTTO QRtto官網", percent: 3.0, note: "" },
					{ merchant: "大阪美食EXPO (Osaka Gourmet EXPO)", percent: 3.0, note: "" },
					{ merchant: "海外實體消費", percent: 3.0, note: "限實體卡、感應式刷卡" },
					{ merchant: "東京迪士尼樂園", percent: 3.0, note: "" },
					{ merchant: "東京華納兄弟哈利波特影城", percent: 3.0, note: "" },
					{ merchant: "大阪環球影城(USJ)", percent: 3.0, note: "" },
					{ merchant: "Apple錢包指定交通卡", percent: 3.0, note: "SUICA、PASMO、ICOCA" },
					{ merchant: "Uber", percent: 3.0, note: "含國內外" },
					{ merchant: "Grab", percent: 3.0, note: "不含訂閱" },
					{ merchant: "台灣高鐵(高鐵)", percent: 3.0, note: "" },
					{ merchant: "yoxi", percent: 3.0, note: "" },
					{ merchant: "台灣大車隊(55688)", percent: 3.0, note: "不含機場接送、代駕服務" },
					{ merchant: "iRent", percent: 3.0, note: "" },
					{ merchant: "和運租車", percent: 3.0, note: "" },
					{ merchant: "格上租車", percent: 3.0, note: "" },
					{ merchant: "指定航空公司", percent: 3.0, note: "" },
					{ merchant: "國內飯店住宿", percent: 3.0, note: "" },
					{ merchant: "星野集團", percent: 3.0, note: "" },
					{ merchant: "全球迪士尼飯店", percent: 3.0, note: "" },
					{ merchant: "東橫INN", percent: 3.0, note: "" },
					{ merchant: "KKday", percent: 3.0, note: "" },
					{ merchant: "Agoda", percent: 3.0, note: "" },
					{ merchant: "Klook", percent: 3.0, note: "" },
					{ merchant: "Airbnb", percent: 3.0, note: "" },
					{ merchant: "Booking.com", percent: 3.0, note: "不含租車、景點、活動、計程車" },
					{ merchant: "Trip.com", percent: 3.0, note: "" },
					{ merchant: "指定旅行社", percent: 3.0, note: "" }
                ] 
            },
            { 
                name: "集精選", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [
                    { merchant: "家樂福", percent: 2.0, note: "不含線上、儲值、商店街、美食街" },
					{ merchant: "LOPIA台灣", percent: 2.0, note: "不含附屬餐廳" },
					{ merchant: "全聯", percent: 2.0, note: "含PX Pay；不含全支付、大全聯" },
					{ merchant: "台灣中油", percent: 2.0, note: "限直營；不含第三方支付" },
					{ merchant: "7-11", percent: 2.0, note: "限實體門市；含OPEN錢包；不含高速公路服務區、醫院美食街及企業辦公大樓等場域之門市" },
					{ merchant: "全家", percent: 2.0, note: "限實體門市；含FamiPay；不含全盈支付、儲值、高速公路服務區、醫院美食街及企業辦公大樓等場域之門市" },
					{ merchant: "IKEA", percent: 2.0, note: "" }
                ] 
            },
			{ 
                name: "慶生月", 
                needsToggle: true, 
                groupNote: "本年度已過", 
                rewards: [{ merchant: "一般消費", percent: 10.0, note: "" }] 
            },
            { 
                name: "來支付", 
                needsToggle: true, 
                groupNote: "", 
                rewards: [{ merchant: "LINE Pay", percent: 2.0, note: "需綁定三大國際支付始可開通" }] 
            }
        ]
    },
	{
        name: "蝦皮購物聯名卡",
        isToggleCard: false,
		cardNote: 
			"~12/31" +
			"\n蝦皮頁面：<a href='https://reurl.cc/z5aA0p' target='_blank'>連結</a>" +
			"\n國泰頁面：<a href='https://reurl.cc/EQ0Gkn' target='_blank'>連結</a>" +
			"\n單筆計算 四捨五入 結帳日次七日內回饋" +
			"\n須設定台新帳戶扣繳台新信用卡帳款",
			groups: [
            { 
                name: "當月累積消費(From國泰)", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [
                    { merchant: "3000以上", percent: 2.0, note: "" },
					{ merchant: "2999以下", percent: 1.0, note: "" }
                ] 
            },
            { 
                name: "消費通路(From蝦皮)", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [
                    { merchant: "商城", percent: 2.0, note: "" },
					{ merchant: "非商城", percent: 1.0, note: "" }
                ] 
            },
            { 
                name: "加碼", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [
                    { merchant: "超級品牌日", percent: 6.0, note: "每季登錄；每月上限1000；次月月底前回饋；品牌店：https://reurl.cc/lYWvGv" },
					{ merchant: "促刷檔期", percent: 6.0, note: "每次登錄；11.11/12.12；每期上限2000；結帳日次五工作日內回饋" }
                ] 
            },
            { 
                name: "一般消費", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [{ merchant: "一般消費", percent: 0.5, note: "" }] 
            },
            { 
                name: "指定通路", 
                needsToggle: false, 
                groupNote: "2025/9/1~2025/12/31；於2025/12/22 16:00至2025/12/24 23:59開放登錄，加碼回饋4.5%，限量10,000名；每期上限2000", 
                rewards: [
                { merchant: "Uber Eats", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "Foodpanda", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "長榮航空", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "中華航空", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "星宇航空", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "台灣虎航", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "亞洲航空", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "國泰航空", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "東南旅遊", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "ezTravel易遊網", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "可樂旅遊", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "雄獅旅遊", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "KKday", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "Klook", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "昇恆昌", percent: 5.0, note: "12/22登錄加碼4.5%" },
				{ merchant: "采盟", percent: 5.0, note: "12/22登錄加碼4.5%" }
                ] 
            }
        ]
    },
    {
        name: "國泰簽帳金融卡",
        isToggleCard: false,
        cardNote: "~12/31 <a href='https://reurl.cc/89aj3j' target='_blank'>詳情</a>\n消費總金額 四捨五入\n限生日於1999年7月1日（含）後；現金回饋\n登錄網址：<a href='https://www.cathaybk.com.tw/promotion' target='_blank'>連結</a>",
        groups: [
            { 
                name: "指定支付", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [{ merchant: "LINE Pay", percent: 2.0, note: "現金回饋" }] 
            },
            { 
                name: "指定通路", 
                needsToggle: false, 
                groupNote: "每月上限150", 
                rewards: [
                    { merchant: "蝦皮購物(Shopee)", percent: 3.0, note: "現金回饋" },
					{ merchant: "麥當勞", percent: 3.0, note: "現金回饋；使用LINE Pay為2%" },
					{ merchant: "海外實體支付", percent: 3.0, note: "現金回饋" },
                ] 
            }
        ]
    },
	{
        name: "Gogoro Rewards卡",
        isToggleCard: false,
        cardNote: "~12/31 <a href='https://reurl.cc/NxMGvn' target='_blank'>詳情</a>\n單筆計算 四捨五入\n基本結帳日次日回饋，加碼結帳日次日回饋",
        groups: [
            { 
                name: "一般消費", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [{ merchant: "一般消費", percent: 1.0, note: "0.5%資費扣繳加碼0.5%" }] 
            },
            { 
                name: "海外消費", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [{ merchant: "海外消費", percent: 4.0, note: "消費地為國外、或幣別非台幣；0.5%資費扣繳加碼3.5%" }] 
            },
            { 
                name: "指定通路", 
                needsToggle: false, 
                groupNote: "扣繳加碼-單筆上限100，帳單上限500", 
                rewards: [
                    { merchant: "7-11", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" },
					{ merchant: "全家便利商店", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" },
					{ merchant: "家樂福", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" },
					{ merchant: "康是美", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" },
					{ merchant: "台灣高鐵(高鐵)", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" },
					{ merchant: "Uber", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" },
					{ merchant: "Ubereats(Uber Eats)", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" },
					{ merchant: "foodpanda", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" },
					{ merchant: "易遊網", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" },
					{ merchant: "KKday", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" },
					{ merchant: "Klook", percent: 3.0, note: "基本0.5%，資費扣繳加碼2.5%" }
                ] 
            },
            { 
                name: "Gogoro", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [
                    { merchant: "電池資費", percent: 4.0, note: "四捨五入 入帳日次日回饋" },
                    { merchant: "指定資費方案", percent: 10.0, note: "4%加碼6%；四捨五入 次月月底前回饋" },
					{ merchant: "GoShare", percent: 15.0, note: "限GoShare App、LINE Pay、Gogoro Wallet；四捨五入 結帳日次日回饋" },
					{ merchant: "維修保養", percent: 4.0, note: "含實體、網路門市；不含社區店；1%，資費扣繳加碼1%，綁定錢包加碼2%；1%入帳日次日回饋，1%結帳日次日回饋，加碼2%結帳日隔天回饋" }
                ] 
            }
        ]
    },
    {
        name: "friDay聯名卡",
        isToggleCard: false,
        cardNote: "~12/31 <a href='https://reurl.cc/89aq3y' target='_blank'>詳情</a>\n單筆計算 四捨五入 結帳日次七日內回饋\n須設定台新帳戶扣繳台新信用卡帳款",
        groups: [
            { 
                name: "一般消費", 
                needsToggle: false, 
                groupNote: "", 
                rewards: [{ merchant: "一般消費", percent: 1.0, note: "" }] 
            },
            { 
                name: "遠傳電信帳單代扣繳", 
                needsToggle: false, 
                groupNote: "含代收；帳單上限300", 
                rewards: [{ merchant: "遠傳電信帳單代扣繳", percent: 3.0, note: "" }] 
            },
            { 
                name: "指定通路", 
                needsToggle: false, 
                groupNote: "帳單上限1000", 
                rewards: [
                    { merchant: "遠傳全台門市", percent: 8.0, note: "限週二、五" },
					{ merchant: "friDay線上購物", percent: 8.0, note: "限週二、五" },
					{ merchant: "friDay 影音", percent: 8.0, note: "限週二、五" },
					{ merchant: "遠傳官網", percent: 8.0, note: "含網路門市與電話行銷；限週二、五" },
					{ merchant: "遠傳心生活APP", percent: 8.0, note: "限週二、五" },
					{ merchant: "遠傳語音系統", percent: 8.0, note: "限週二、五" },
					{ merchant: "遠大售票", percent: 8.0, note: "限週二、五" },
					{ merchant: "肯德基(KFC)", percent: 8.0, note: "限週二、五" },
					{ merchant: "必勝客", percent: 8.0, note: "限週二、五" },
					{ merchant: "EZTABLE", percent: 8.0, note: "限週二、五" },
					{ merchant: "Trip.com", percent: 8.0, note: "限週二、五" },
					{ merchant: "Klook", percent: 8.0, note: "限週二、五" },
					{ merchant: "Agoda", percent: 8.0, note: "限週二、五" }
                ] 
            }
        ]
    }
];

// ----------------------------------------------------
// 📱 支付方式 (Payment Methods)
// ----------------------------------------------------

const DEFAULT_PAYMENTS = [
    {
        name: "全支付 (PX Pay Plus)",
        isStandalone: true, 
        linkedCardGroup: null, 
        paymentNote: "<a href='https://reurl.cc/OmNVvg' target='_blank'>活動說明</a> / <a href='https://reurl.cc/DO2mjQ' target='_blank'>通路列表</a>\n四捨五入 即時回饋",
        rewards: [
            // 實體商店-購物
            { merchant: "屈臣氏", percent: 3.0, note: "" },
			{ merchant: "宜家家居", percent: 3.0, note: "" },
			{ merchant: "OKmart(OK超商)", percent: 3.0, note: "" },
			{ merchant: "ATT 4 FUN 信義店", percent: 3.0, note: "" },
			{ merchant: "華泰名品城", percent: 3.0, note: "" },
			{ merchant: "環球購物中心", percent: 3.0, note: "" },
			{ merchant: "台茂購物中心", percent: 3.0, note: "" },
			{ merchant: "CITYLINK", percent: 3.0, note: "" },
			{ merchant: "NOKE 忠泰樂生活", percent: 3.0, note: "" },
			{ merchant: "日曜天地", percent: 3.0, note: "" },
			{ merchant: "美麗華百樂園", percent: 3.0, note: "" },
			{ merchant: "京站時尚廣場", percent: 3.0, note: "" },
			{ merchant: "無印良品", percent: 3.0, note: "" },
			{ merchant: "Adidas", percent: 3.0, note: "" },
			{ merchant: "昇恆昌", percent: 3.0, note: "內湖旗艦店、松山機場" },
			{ merchant: "focus時尚流行館", percent: 3.0, note: "" },
			{ merchant: "林百貨", percent: 3.0, note: "" },
			{ merchant: "中友百貨", percent: 3.0, note: "" },
			{ merchant: "桃知道GELEVEN PLAZA", percent: 3.0, note: "" },
			{ merchant: "統領廣場", percent: 3.0, note: "" },
			{ merchant: "全國電子", percent: 3.0, note: "" },
			{ merchant: "鞋全家福", percent: 3.0, note: "" },
			{ merchant: "昂路名鞋館", percent: 3.0, note: "" },
			{ merchant: "神腦國際 (門市)", percent: 3.0, note: "" },
			{ merchant: "振宇五金", percent: 3.0, note: "" },
			{ merchant: "SAMSUNG", percent: 3.0, note: "" },
			{ merchant: "Studio A", percent: 3.0, note: "" },
			{ merchant: "Straight A", percent: 3.0, note: "" },
			{ merchant: "德誼數位DATA EXPRESS", percent: 3.0, note: "" },
			{ merchant: "三創生活", percent: 3.0, note: "" },
			{ merchant: "摩曼頓Momentum", percent: 3.0, note: "" },
			{ merchant: "NET", percent: 3.0, note: "" },
			{ merchant: "味全龍職業棒球隊", percent: 3.0, note: "應援店&福利社" },
			{ merchant: "尚順購物中心", percent: 3.0, note: "" },
			{ merchant: "屏東太平洋百貨", percent: 3.0, note: "" },
			{ merchant: "日藥本舖", percent: 3.0, note: "" },
			{ merchant: "普雷伊", percent: 3.0, note: "" },
			{ merchant: "禮客OUTLET", percent: 3.0, note: "" },
			{ merchant: "裕隆城威秀商場", percent: 3.0, note: "配合商場為6,7樓" },
			{ merchant: "Mamaway", percent: 3.0, note: "" },
			{ merchant: "華歌爾", percent: 3.0, note: "" },
			{ merchant: "金車噶瑪蘭威士忌", percent: 3.0, note: "" },
			{ merchant: "小米之家 台中綠園道專賣店", percent: 3.0, note: "" },
			{ merchant: "阿瘦皮鞋", percent: 3.0, note: "" },
			{ merchant: "棉花田生機園地", percent: 3.0, note: "" },
			{ merchant: "宏匯廣場", percent: 3.0, note: "" },
			{ merchant: "良興", percent: 3.0, note: "" },
			{ merchant: "三井3C", percent: 3.0, note: "" },
			{ merchant: "QUEEN SHOP", percent: 3.0, note: "" },
			{ merchant: "比漾廣場", percent: 3.0, note: "" },
			{ merchant: "秀泰生活", percent: 3.0, note: "" },
			{ merchant: "義大世界購物廣場", percent: 3.0, note: "" },
			{ merchant: "大魯閣", percent: 3.0, note: "" },
			{ merchant: "勤美誠品綠園道", percent: 3.0, note: "" },
			{ merchant: "PARK2草悟廣場", percent: 3.0, note: "" },
			{ merchant: "金典綠園道商場", percent: 3.0, note: "" },
			{ merchant: "麗嬰房", percent: 3.0, note: "" },
			{ merchant: "DCC", percent: 3.0, note: "" },
			{ merchant: "宜兒樂", percent: 3.0, note: "" },
			{ merchant: "金東購物商場", percent: 3.0, note: "" },
			{ merchant: "仁愛眼鏡", percent: 3.0, note: "" },
			{ merchant: "老協珍", percent: 3.0, note: "" },
			{ merchant: "HeyBonnie 芸格花藝", percent: 3.0, note: "" },
			{ merchant: "高雄市政府文化局駁二藝術特區", percent: 3.0, note: "" },
			{ merchant: "華山1914文創園區", percent: 3.0, note: "" },
			{ merchant: "Himalaya中山店", percent: 3.0, note: "" },
			{ merchant: "享平方廣場", percent: 3.0, note: "" },
			{ merchant: "a la sha", percent: 3.0, note: "" },
			{ merchant: "小林眼鏡", percent: 3.0, note: "" },
			{ merchant: "傑昇通信", percent: 3.0, note: "" },
			{ merchant: "LA NEW", percent: 3.0, note: "" },
			{ merchant: "金玉堂文具批發廣場", percent: 3.0, note: "" },
			{ merchant: "夏普震旦", percent: 3.0, note: "" },
			{ merchant: "DK高博士", percent: 3.0, note: "" },
			{ merchant: "Lagoon", percent: 3.0, note: "" },
			{ merchant: "101文具天堂", percent: 3.0, note: "" },
			{ merchant: "九乘九文具專家", percent: 3.0, note: "" },
			{ merchant: "三槍宜而爽", percent: 3.0, note: "" },
			{ merchant: "墊腳石", percent: 3.0, note: "" },
			{ merchant: "小丁婦幼", percent: 3.0, note: "" },
			{ merchant: "海邊走走", percent: 3.0, note: "" },
			{ merchant: "芋樂大世界", percent: 3.0, note: "" },
			{ merchant: "億家具批發倉庫", percent: 3.0, note: "" },
			{ merchant: "溪和水產", percent: 3.0, note: "" },
			{ merchant: "EASY SHOP台灣國民內衣店", percent: 3.0, note: "" },
			{ merchant: "超頻電腦", percent: 3.0, note: "" },

            // 實體商店-生活服務
            { merchant: "捷運自動售票機", percent: 3.0, note: "" },
			{ merchant: "車站詢問處", percent: 3.0, note: "" },
			{ merchant: "捷運車站花車販售處", percent: 3.0, note: "" },
			{ merchant: "貓空纜車", percent: 3.0, note: "" },
			{ merchant: "兒童新樂園", percent: 3.0, note: "" },
			{ merchant: "臺北小巨蛋冰上樂園", percent: 3.0, note: "" },
			{ merchant: "捷運北投會館", percent: 3.0, note: "" },
			{ merchant: "旅天下", percent: 3.0, note: "" },
			{ merchant: "ChargeSPOT", percent: 3.0, note: "" },
			{ merchant: "raingo", percent: 3.0, note: "" },
			{ merchant: "USPACE", percent: 3.0, note: "App授扣" },
			{ merchant: "CITY PARKING 城市車旅", percent: 3.0, note: "" },
			{ merchant: "台灣大車隊(55688)", percent: 3.0, note: "" },
			{ merchant: "耐斯王子大飯店", percent: 3.0, note: "" },
			{ merchant: "173叫計程車", percent: 3.0, note: "" },
			{ merchant: "婦安貴賓計程車", percent: 3.0, note: "" },
			{ merchant: "優良計程車", percent: 3.0, note: "" },
			{ merchant: "AFTEE", percent: 3.0, note: "" },
			{ merchant: "大都會車隊", percent: 3.0, note: "" },
			{ merchant: "倫永大車隊", percent: 3.0, note: "" },
			{ merchant: "皇冠大車隊", percent: 3.0, note: "" },
			{ merchant: "嘟嘟房", percent: 3.0, note: "" },
			{ merchant: "ViVi PARK", percent: 3.0, note: "" },
			{ merchant: "台灣聯通", percent: 3.0, note: "" },
			{ merchant: "aeroride 台灣快綫", percent: 3.0, note: "" },
			{ merchant: "叫車吧", percent: 3.0, note: "" },
			{ merchant: "松鼠集運", percent: 3.0, note: "" },
			{ merchant: "停易適停車場", percent: 3.0, note: "" },
			{ merchant: "俥亭停車場", percent: 3.0, note: "" },
			{ merchant: "日月亭停車場", percent: 3.0, note: "" },
			{ merchant: "宜舍停車場", percent: 3.0, note: "" },
			{ merchant: "ｉ郵箱", percent: 3.0, note: "" },
			{ merchant: "南仁湖", percent: 3.0, note: "" },
			{ merchant: "OWLocker智慧型寄物櫃", percent: 3.0, note: "" },
			{ merchant: "宜蘭傳藝", percent: 3.0, note: "" },
			{ merchant: "台糖加油站", percent: 3.0, note: "" },
			{ merchant: "SS生活販賣機", percent: 3.0, note: "" },
			{ merchant: "摩馴生活販賣機", percent: 3.0, note: "" },
			{ merchant: "義大遊樂世界", percent: 3.0, note: "" },
			{ merchant: "喜樂時代影城", percent: 3.0, note: "" },
			{ merchant: "臺北市立美術館", percent: 3.0, note: "" },
			{ merchant: "宜蘭縣立蘭陽博物館", percent: 3.0, note: "" },
			{ merchant: "袖珍博物館", percent: 3.0, note: "" },
			{ merchant: "瀚寓夏天", percent: 3.0, note: "" },
			{ merchant: "丁丁藥局", percent: 3.0, note: "" },
			{ merchant: "翔順忘情遊", percent: 3.0, note: "" },
			{ merchant: "花蓮理想大地渡假飯店", percent: 3.0, note: "" },
			{ merchant: "大樹醫藥", percent: 3.0, note: "" },
			{ merchant: "康宜庭", percent: 3.0, note: "" },
			{ merchant: "錢櫃", percent: 3.0, note: "" },
			{ merchant: "健身工廠", percent: 3.0, note: "" },
			{ merchant: "旅電", percent: 3.0, note: "" },
			{ merchant: "丁鴻志婦產科診所", percent: 3.0, note: "" },
			{ merchant: "中山醫學大學附設醫院", percent: 3.0, note: "" },
			{ merchant: "佛教慈濟醫療財團法人花蓮慈濟醫院", percent: 3.0, note: "" },
			{ merchant: "愛在家平台", percent: 3.0, note: "" },
			{ merchant: "檜意森活村", percent: 3.0, note: "" },
			{ merchant: "蝴蝶谷溫泉渡假村", percent: 3.0, note: "" },
			{ merchant: "花蓮遠雄海洋公園", percent: 3.0, note: "" },
			{ merchant: "台北老爺大酒店", percent: 3.0, note: "" },
			{ merchant: "台糖長榮酒店(台南)", percent: 3.0, note: "" },
			{ merchant: "榮美金鬱金香酒店", percent: 3.0, note: "" },
			{ merchant: "榮興金鬱金香酒店", percent: 3.0, note: "" },
			{ merchant: "葉綠宿", percent: 3.0, note: "" },
			{ merchant: "綠宿行旅", percent: 3.0, note: "" },
			{ merchant: "葉綠宿 漫漫回嘉", percent: 3.0, note: "" },
			{ merchant: "葉綠宿 川閱", percent: 3.0, note: "" },
			{ merchant: "福爾摩沙草悟道酒店", percent: 3.0, note: "" },
			{ merchant: "福爾摩沙ㄤ婿文旅", percent: 3.0, note: "" },
			{ merchant: "台中港酒店", percent: 3.0, note: "" },
			{ merchant: "台糖台北會館", percent: 3.0, note: "" },
			{ merchant: "中科大飯店", percent: 3.0, note: "" },
			{ merchant: "中科后豐會館", percent: 3.0, note: "" },
			{ merchant: "芭蕾城市渡假旅店", percent: 3.0, note: "" },
			{ merchant: "台糖池上牧野渡假村", percent: 3.0, note: "" },
			{ merchant: "柳營尖山埤渡假村", percent: 3.0, note: "" },
			{ merchant: "娜路彎大酒店", percent: 3.0, note: "" },
			{ merchant: "佑全保健藥妝", percent: 3.0, note: "" },
			{ merchant: "健康人生藥局", percent: 3.0, note: "" },
			{ merchant: "台安藥局", percent: 3.0, note: "" },
			{ merchant: "正光藥局", percent: 3.0, note: "" },
			{ merchant: "淡江大學", percent: 3.0, note: "" },
			{ merchant: "輔仁大學", percent: 3.0, note: "" },
			{ merchant: "馬偕醫護管理專科學校", percent: 3.0, note: "" },
			{ merchant: "168Parking", percent: 3.0, note: "" },
			{ merchant: "歐特儀股份有限公司", percent: 3.0, note: "" },
			{ merchant: "秀泰影城", percent: 3.0, note: "線上購票" },

            // 實體商店-餐飲
            { merchant: "一之軒", percent: 3.0, note: "" },
			{ merchant: "天仁茗茶", percent: 3.0, note: "" },
			{ merchant: "這一鍋", percent: 3.0, note: "" },
			{ merchant: "這一小鍋", percent: 3.0, note: "" },
			{ merchant: "叁加叁(三加三)", percent: 3.0, note: "" },
			{ merchant: "瓦城", percent: 3.0, note: "" },
			{ merchant: "1010湘", percent: 3.0, note: "" },
			{ merchant: "非常泰", percent: 3.0, note: "" },
			{ merchant: "YABI KITCHEN", percent: 3.0, note: "" },
			{ merchant: "雲雀餐飲集團", percent: 3.0, note: "" },
			{ merchant: "爭鮮迴轉", percent: 3.0, note: "" },
			{ merchant: "爭鮮PLUS", percent: 3.0, note: "" },
			{ merchant: "爭鮮gogo", percent: 3.0, note: "" },
			{ merchant: "定食8", percent: 3.0, note: "" },
			{ merchant: "MAGIC TOUCH", percent: 3.0, note: "" },
			{ merchant: "頂呱呱", percent: 3.0, note: "" },
			{ merchant: "東京油組", percent: 3.0, note: "" },
			{ merchant: "屋馬燒肉", percent: 3.0, note: "" },
			{ merchant: "新東陽", percent: 3.0, note: "" },
			{ merchant: "涮屋馬", percent: 3.0, note: "" },
			{ merchant: "金韓食", percent: 3.0, note: "" },
			{ merchant: "ATT Valley 松仁店", percent: 3.0, note: "" },
			{ merchant: "ATT 筷食尚 桃園店", percent: 3.0, note: "" },
			{ merchant: "王品牛排", percent: 3.0, note: "" },
			{ merchant: "享鴨", percent: 3.0, note: "" },
			{ merchant: "莆田", percent: 3.0, note: "" },
			{ merchant: "丰禾", percent: 3.0, note: "" },
			{ merchant: "就饗", percent: 3.0, note: "" },
			{ merchant: "原燒", percent: 3.0, note: "" },
			{ merchant: "金咕", percent: 3.0, note: "" },
			{ merchant: "聚", percent: 3.0, note: "" },
			{ merchant: "藝奇", percent: 3.0, note: "" },
			{ merchant: "夏慕尼", percent: 3.0, note: "" },
			{ merchant: "西堤", percent: 3.0, note: "" },
			{ merchant: "陶板屋", percent: 3.0, note: "" },
			{ merchant: "品田牧場", percent: 3.0, note: "" },
			{ merchant: "向辣", percent: 3.0, note: "" },
			{ merchant: "青花驕", percent: 3.0, note: "" },
			{ merchant: "和牛涮", percent: 3.0, note: "" },
			{ merchant: "尬鍋", percent: 3.0, note: "" },
			{ merchant: "肉次方", percent: 3.0, note: "" },
			{ merchant: "阪前", percent: 3.0, note: "" },
			{ merchant: "橘焱胡同集團", percent: 3.0, note: "" },
			{ merchant: "漢堡王", percent: 3.0, note: "" },
			{ merchant: "金色三麥", percent: 3.0, note: "" },
			{ merchant: "三商巧福", percent: 3.0, note: "" },
			{ merchant: "拿坡里", percent: 3.0, note: "" },
			{ merchant: "三商炸雞", percent: 3.0, note: "" },
			{ merchant: "三商鮮五丼", percent: 3.0, note: "" },
			{ merchant: "品川蘭", percent: 3.0, note: "" },
			{ merchant: "BANCO", percent: 3.0, note: "" },
			{ merchant: "巧福PLUS", percent: 3.0, note: "" },
			{ merchant: "謎思咖啡", percent: 3.0, note: "" },
			{ merchant: "橡木桶洋酒", percent: 3.0, note: "" },
			{ merchant: "中友百貨", percent: 3.0, note: "美食街" },
			{ merchant: "樂天棒球場", percent: 3.0, note: "" },
			{ merchant: "勝博殿", percent: 3.0, note: "" },
			{ merchant: "一之鄉", percent: 3.0, note: "" },
			{ merchant: "進發食品", percent: 3.0, note: "" },
			{ merchant: "天香回味養生鍋", percent: 3.0, note: "" },
			{ merchant: "秀咖啡", percent: 3.0, note: "" },
			{ merchant: "1982 de glacée冰淇淋", percent: 3.0, note: "" },
			{ merchant: "櫻桃計畫", percent: 3.0, note: "" },
			{ merchant: "森高砂咖啡館", percent: 3.0, note: "" },
			{ merchant: "煙波花時間", percent: 3.0, note: "" },
			{ merchant: "REN BISTRONOMY", percent: 3.0, note: "" },
			{ merchant: "清心福全", percent: 3.0, note: "" },
			{ merchant: "麥味登", percent: 3.0, note: "" },
			{ merchant: "八方雲集", percent: 3.0, note: "" },
			{ merchant: "85度C", percent: 3.0, note: "" },
			{ merchant: "CoCo都可", percent: 3.0, note: "" },
			{ merchant: "可不可熟成紅茶(kebuke)", percent: 3.0, note: "" },
			{ merchant: "迷客夏", percent: 3.0, note: "" },
			{ merchant: "鮮茶道", percent: 3.0, note: "" },
			{ merchant: "麻古茶坊", percent: 3.0, note: "" },
			{ merchant: "梁社漢排骨", percent: 3.0, note: "" },
			{ merchant: "COMEBUY", percent: 3.0, note: "" },
			{ merchant: "路易莎咖啡", percent: 3.0, note: "" },
			{ merchant: "TEA TOP台灣第一味", percent: 3.0, note: "" },
			{ merchant: "cama café", percent: 3.0, note: "" },
			{ merchant: "烏弄原茶", percent: 3.0, note: "" },
			{ merchant: "龜記", percent: 3.0, note: "" },
			{ merchant: "潮味決", percent: 3.0, note: "" },
			{ merchant: "萬波島嶼紅茶", percent: 3.0, note: "" },
			{ merchant: "珍煮丹", percent: 3.0, note: "" },
			{ merchant: "喫茶小舖", percent: 3.0, note: "" },
			{ merchant: "老先覺", percent: 3.0, note: "" },
			{ merchant: "水巷茶弄", percent: 3.0, note: "" },
			{ merchant: "康青龍", percent: 3.0, note: "" },
			{ merchant: "春陽茶事", percent: 3.0, note: "" },
			{ merchant: "玉津咖啡", percent: 3.0, note: "" },
			{ merchant: "強尼兄弟健康廚房", percent: 3.0, note: "" },
			{ merchant: "南海茶道", percent: 3.0, note: "" },
			{ merchant: "高北牛乳大王", percent: 3.0, note: "" },
			{ merchant: "台茶1号(台茶1號)", percent: 3.0, note: "" },
			{ merchant: "MAYI滿溢", percent: 3.0, note: "" },
			{ merchant: "七盞茶", percent: 3.0, note: "" },
			{ merchant: "吃茶三千", percent: 3.0, note: "" },
			{ merchant: "瑪俐亞麵包蛋糕坊", percent: 3.0, note: "" },
			{ merchant: "啵棒珍珠果茶專賣所", percent: 3.0, note: "" },
			{ merchant: "STAND cafébar", percent: 3.0, note: "" },
			{ merchant: "五鮮級鍋物專賣", percent: 3.0, note: "" },
			{ merchant: "達美樂披薩", percent: 3.0, note: "" },
			{ merchant: "TrueWin初韻", percent: 3.0, note: "" },
			{ merchant: "大賞平價鉄板燒", percent: 3.0, note: "" },
			{ merchant: "12MINI", percent: 3.0, note: "部分品牌適用" },
			{ merchant: "一品活蝦", percent: 3.0, note: "" },
			{ merchant: "漁人町星光市集", percent: 3.0, note: "" },

            // 實體商店-公益
            { merchant: "財團法人忠義社會福利事業基金會", percent: 3.0, note: "" },
			{ merchant: "社團法人中華兒童暨家庭守護者協會", percent: 3.0, note: "" },
			{ merchant: "社團法人臺灣雷特氏症病友關懷協會", percent: 3.0, note: "" },
			{ merchant: "新北市康復之友協會", percent: 3.0, note: "" },

            // 實體商店-寵物
            { merchant: "東森寵物", percent: 3.0, note: "" },
			{ merchant: "寵物公園", percent: 3.0, note: "" },
			{ merchant: "貓狗大棧", percent: 3.0, note: "" },

            // 網路商店
            { merchant: "Foodpanda", percent: 3.0, note: "" },
			{ merchant: "IKEA線上購物", percent: 3.0, note: "" },
			{ merchant: "EZTABLE", percent: 3.0, note: "" },
			{ merchant: "小三美日", percent: 3.0, note: "" },
			{ merchant: "KFC肯德基", percent: 3.0, note: "線上" },
			{ merchant: "PizzaHut必勝客", percent: 3.0, note: "線上" },
			{ merchant: "KKBOX", percent: 3.0, note: "" },
			{ merchant: "KKday", percent: 3.0, note: "" }
        ]
    },
	{ 
		name: "LINE Pay",
		isStandalone: true,
        linkedCardGroup: null, 
        paymentNote: "請在通路搜尋中查詢LINE Pay取得信用卡回饋",
		rewards: [
			// 便利商店
			{ merchant: "7-ELEVEN(7-11)", percent: 2.0, note: "" },
			{ merchant: "全家便利商店", percent: 2.0, note: "" },
			{ merchant: "OK Mart(OK超商/OKMart)", percent: 2.0, note: "" },
			{ merchant: "萊爾富(Hi-life)", percent: 2.0, note: "" },
			{ merchant: "美廉社", percent: 2.0, note: "" },

			// 百貨與購物中心
			{ merchant: "華泰名品城", percent: 2.0, note: "" },
			{ merchant: "環球購物中心", percent: 2.0, note: "" },
			{ merchant: "京站時尚廣場", percent: 2.0, note: "" },
			{ merchant: "統一時代百貨", percent: 2.0, note: "" },
			{ merchant: "新光三越", percent: 2.0, note: "" },
			{ merchant: "遠東SOGO", percent: 2.0, note: "" },
			{ merchant: "MITSUI OUTLET PARK", percent: 2.0, note: "" },

			// 咖啡與飲料
			{ merchant: "路易莎咖啡(LOUSIA coffee)", percent: 2.0, note: "" },
			{ merchant: "cama café", percent: 2.0, note: "" },
			{ merchant: "星巴克", percent: 2.0, note: "" },
			{ merchant: "康青龍", percent: 2.0, note: "" },
			{ merchant: "COMEBUY", percent: 2.0, note: "" },
			{ merchant: "50嵐", percent: 2.0, note: "" },
			{ merchant: "麻古茶坊", percent: 2.0, note: "" },
			{ merchant: "水巷茶弄", percent: 2.0, note: "" },

			// 餐飲與速食
			{ merchant: "五鮮級鍋物專賣", percent: 2.0, note: "" },
			{ merchant: "梁社漢排骨", percent: 2.0, note: "" },
			{ merchant: "拿坡里", percent: 2.0, note: "" },
			{ merchant: "達美樂披薩", percent: 2.0, note: "" },
			{ merchant: "王品牛排", percent: 2.0, note: "" },
			{ merchant: "享鴨", percent: 2.0, note: "" },
			{ merchant: "肯德基(KFC)", percent: 2.0, note: "" },
			{ merchant: "麥當勞", percent: 2.0, note: "" },
			{ merchant: "必勝客", percent: 2.0, note: "" },
			{ merchant: "漢堡王", percent: 2.0, note: "" },
			{ merchant: "21風味館", percent: 2.0, note: "" },
			{ merchant: "三商炸雞", percent: 2.0, note: "" },
			{ merchant: "麥味登", percent: 2.0, note: "" },
			{ merchant: "迷克夏", percent: 2.0, note: "" },
			{ merchant: "八方雲集", percent: 2.0, note: "" },
			{ merchant: "摩斯漢堡", percent: 2.0, note: "" },

			// 藥妝與家居
			{ merchant: "屈臣氏", percent: 2.0, note: "" },
			{ merchant: "康是美", percent: 2.0, note: "" },
			{ merchant: "寶雅", percent: 2.0, note: "" },
			{ merchant: "丁丁藥局", percent: 2.0, note: "" },
			{ merchant: "大樹藥局", percent: 2.0, note: "" },
			{ merchant: "宜家家居(IKEA)", percent: 2.0, note: "" },
			{ merchant: "無印良品(MUJI)", percent: 2.0, note: "" },
			{ merchant: "小北百貨", percent: 2.0, note: "" },
			{ merchant: "POYA寶雅", percent: 2.0, note: "" },

			// 電子與運動用品
			{ merchant: "神腦國際", percent: 2.0, note: "" },
			{ merchant: "全國電子", percent: 2.0, note: "" },
			{ merchant: "燦坤", percent: 2.0, note: "" },
			{ merchant: "STUDIO A", percent: 2.0, note: "" },
			{ merchant: "NET", percent: 2.0, note: "" },
			{ merchant: "摩曼頓", percent: 2.0, note: "" },
			{ merchant: "Adidas", percent: 2.0, note: "" },
			{ merchant: "NIKE", percent: 2.0, note: "" },
			{ merchant: "迪卡儂", percent: 2.0, note: "" },

			// 加油與娛樂
			{ merchant: "台灣中油", percent: 2.0, note: "" },
			{ merchant: "錢櫃", percent: 2.0, note: "" },
			{ merchant: "湯姆熊歡樂世界", percent: 2.0, note: "" },
			{ merchant: "威秀影城", percent: 2.0, note: "" },

			// 其他零售與服務
			{ merchant: "特力屋", percent: 2.0, note: "" },
			{ merchant: "HOLA", percent: 2.0, note: "" },
			{ merchant: "UNIQLO", percent: 2.0, note: "" },
			{ merchant: "城市車旅", percent: 2.0, note: "" },
			{ merchant: "ChargeSPOT", percent: 2.0, note: "" },
			{ merchant: "LINE GO", percent: 2.0, note: "" },
			{ merchant: "55688(台灣大車隊)", percent: 2.0, note: "" },

			// 旅遊與線上平台
			{ merchant: "UberEats", percent: 2.0, note: "" },
			{ merchant: "巴哈姆特", percent: 2.0, note: "" },
			{ merchant: "KKBOX", percent: 2.0, note: "" },
			{ merchant: "ezTravel易遊網", percent: 2.0, note: "" },
			{ merchant: "雄獅旅遊", percent: 2.0, note: "" },
			{ merchant: "KKday", percent: 2.0, note: "" }
		]
	},
    { 
        name: "台新Pay",
        isStandalone: false,
        linkedCardGroup: "Richart卡.Pay著刷", 
        paymentNote: "<a href='https://reurl.cc/9nkV3X' target='_blank'>通路</a>",
        rewards: [
			{ merchant: "全家便利商店", percent: 3.8, note: "" },
			{ merchant: "7-11", percent: 3.8, note: "" },
			{ merchant: "OK Mart(OK超商/OKMart)", percent: 3.8, note: "" },
			{ merchant: "Hi-Life萊爾富", percent: 3.8, note: "" },
			{ merchant: "楓康超市", percent: 3.8, note: "" },
			{ merchant: "九乘九文具專家", percent: 3.8, note: "" },
			{ merchant: "IKEA", percent: 3.8, note: "" },
			{ merchant: "光南大批發", percent: 3.8, note: "" },
			{ merchant: "撥筋堂", percent: 3.8, note: "" },
			{ merchant: "LIANAN", percent: 3.8, note: "" },
			{ merchant: "佑全保健藥妝", percent: 3.8, note: "" },
			{ merchant: "健康人生藥局", percent: 3.8, note: "" },
			{ merchant: "新光三越", percent: 3.8, note: "" },
			{ merchant: "Richart Mart", percent: 3.8, note: "" },
			{ merchant: "康是美", percent: 3.8, note: "" },
			{ merchant: "曼摩頓Momentum", percent: 3.8, note: "" },
			{ merchant: "NET", percent: 3.8, note: "" },
			{ merchant: "55688(台灣大車隊)", percent: 3.8, note: "" },
			{ merchant: "新北捷運", percent: 3.8, note: "" },
			{ merchant: "路易沙咖啡Lousia coffee", percent: 3.8, note: "" },
			{ merchant: "漢堡王Burger King", percent: 3.8, note: "" },
			{ merchant: "屋馬", percent: 3.8, note: "" },
			{ merchant: "金韓食", percent: 3.8, note: "" },
			{ merchant: "涮屋馬", percent: 3.8, note: "" }
		] 
    },
	{ 
		name: "台灣Pay (TWQR)",
		isStandalone: false,
        linkedCardGroup: "Richart卡.Pay著刷", 
        paymentNote: "<a href='https://reurl.cc/WOmDbZ' target='_blank'>通路</a>",
		rewards: [
			{ merchant: "85度C", percent: 3.8, note: "" },
			{ merchant: "築間幸福鍋物", percent: 3.8, note: "" },
			{ merchant: "美廉社", percent: 3.8, note: "" },
			{ merchant: "可不可熟成紅茶", percent: 3.8, note: "" },
			{ merchant: "鞋全家福", percent: 3.8, note: "" },
			{ merchant: "三商巧福", percent: 3.8, note: "" },
			{ merchant: "拿坡里", percent: 3.8, note: "" },
			{ merchant: "太平洋百貨公司", percent: 3.8, note: "" },
			{ merchant: "福勝亭", percent: 3.8, note: "" },
			{ merchant: "杏一醫療用品", percent: 3.8, note: "" },
			{ merchant: "GLOBALLMALL", percent: 3.8, note: "" },
			{ merchant: "萬波導與紅茶", percent: 3.8, note: "" },
			{ merchant: "漢神巨蛋購物廣場", percent: 3.8, note: "" },
			{ merchant: "東森購物", percent: 3.8, note: "" },
			{ merchant: "STAUDIO A", percent: 3.8, note: "" },
			{ merchant: "三商炸雞", percent: 3.8, note: "" },
			{ merchant: "吉野家", percent: 3.8, note: "" },
			{ merchant: "神腦國際", percent: 3.8, note: "" },
			{ merchant: "福容大飯店", percent: 3.8, note: "" },
			{ merchant: "棉花田生機園地", percent: 3.8, note: "" },
			{ merchant: "TOMOD’S", percent: 3.8, note: "" },
			{ merchant: "三商鮮五丼", percent: 3.8, note: "" },
			{ merchant: "花鳥川水果千層蛋糕", percent: 3.8, note: "" },
			{ merchant: "聖德科斯", percent: 3.8, note: "" },
			{ merchant: "有之和牛", percent: 3.8, note: "" },
			{ merchant: "老虎城購物中心", percent: 3.8, note: "" },
			{ merchant: "BANCO", percent: 3.8, note: "" },
			{ merchant: "STRAIGHT A", percent: 3.8, note: "" },
			{ merchant: "麗寶樂園度假區", percent: 3.8, note: "" },
			{ merchant: "品川蘭", percent: 3.8, note: "" },
			{ merchant: "G2000", percent: 3.8, note: "" },
			{ merchant: "尚亨運動用品", percent: 3.8, note: "" },
			{ merchant: "麗嬰房股份有限公司", percent: 3.8, note: "" },
			{ merchant: "HILL TOP山頂鳥", percent: 3.8, note: "" },
			{ merchant: "悠跑", percent: 3.8, note: "" },
			{ merchant: "樂跑", percent: 3.8, note: "" }
		]
	},
	{ 
        name: "街口支付",
        isStandalone: false,
        linkedCardGroup: "Richart卡.假日刷", 
        paymentNote: "<a href='https://mkt.jkopay.com/brandlist' target='_blank'>通路</a>",
        rewards: [
			// 便利商店
			{ merchant: "7-ELEVEN(7-11)", percent: 2.0, note: "" },
			{ merchant: "全家便利商店", percent: 2.0, note: "" },
			{ merchant: "OK Mart(OK超商/OKMart)", percent: 2.0, note: "" },
			{ merchant: "萊爾富(Hi-life)", percent: 2.0, note: "" },
			{ merchant: "美廉社", percent: 2.0, note: "" },
			{ merchant: "楓康超市", percent: 2.0, note: "" },
			{ merchant: "家樂福", percent: 2.0, note: "" },
			{ merchant: "喜互惠", percent: 2.0, note: "" },
			
			// 生活
			{ merchant: "誠品生活", percent: 2.0, note: "" },
			{ merchant: "台灣中油", percent: 2.0, note: "" },
			{ merchant: "屈臣氏", percent: 2.0, note: "" },
			{ merchant: "康是美", percent: 2.0, note: "" },
			{ merchant: "丁丁連鎖藥妝", percent: 2.0, note: "" },
			{ merchant: "大樹藥局", percent: 2.0, note: "" },
			{ merchant: "台灣大車隊(55688)", percent: 2.0, note: "" },
					
            // 餐飲
			{ merchant: "星巴克", percent: 2.0, note: "" },
			{ merchant: "清心福全", percent: 2.0, note: "" },
			{ merchant: "茶湯畫", percent: 2.0, note: "" },
			{ merchant: "迷克夏", percent: 2.0, note: "" },
			{ merchant: "水巷茶弄", percent: 2.0, note: "" },
			{ merchant: "麻古茶坊", percent: 2.0, note: "" },
			{ merchant: "路易莎咖啡(LOUSIA coffee)", percent: 2.0, note: "" },
			{ merchant: "摩斯漢堡", percent: 2.0, note: "" },
			{ merchant: "肯德基(KFC)", percent: 2.0, note: "" },
			{ merchant: "漢堡王", percent: 2.0, note: "" },
			{ merchant: "麥當勞", percent: 2.0, note: "" },
			{ merchant: "頂呱呱", percent: 2.0, note: "" },
			{ merchant: "八方雲集", percent: 2.0, note: "" },
			{ merchant: "三商巧福", percent: 2.0, note: "" },
			{ merchant: "拿坡里", percent: 2.0, note: "" },
			{ merchant: "必勝客", percent: 2.0, note: "" },
			{ merchant: "定食8", percent: 2.0, note: "" },
			{ merchant: "麥味登", percent: 2.0, note: "" },
			{ merchant: "六扇門時尚湯鍋", percent: 2.0, note: "" },
			{ merchant: "屋馬", percent: 2.0, note: "" },
			{ merchant: "梁社漢排骨", percent: 2.0, note: "" },
					
            // 日用
			{ merchant: "寶雅(POYA)", percent: 2.0, note: "" },
			{ merchant: "寶家", percent: 2.0, note: "" },
			{ merchant: "九乘九文具專家", percent: 2.0, note: "" },
			{ merchant: "金玉堂", percent: 2.0, note: "" },
			{ merchant: "金石堂", percent: 2.0, note: "" },
			{ merchant: "101文具天堂", percent: 2.0, note: "" },
			{ merchant: "神腦數位", percent: 2.0, note: "" },
                
            // 服飾
			{ merchant: "NET", percent: 2.0, note: "" },
			{ merchant: "鞋全家福", percent: 2.0, note: "" },
			{ merchant: "UNIQLO", percent: 2.0, note: "" },
			{ merchant: "GU", percent: 2.0, note: "" },

			// 共享
			{ merchant: "WeMo", percent: 2.0, note: "" },
			{ merchant: "ChargeSPOT", percent: 2.0, note: "" },

            // 眼鏡
			{ merchant: "德恩堂眼鏡", percent: 2.0, note: "" },
			{ merchant: "小林眼鏡", percent: 2.0, note: "" },
			{ merchant: "仁愛眼鏡", percent: 2.0, note: "" },
			{ merchant: "寶島眼鏡", percent: 2.0, note: "" },

            // 影視
			{ merchant: "秀泰影城", percent: 2.0, note: "" },

            // 家居
			{ merchant: "IKEA", percent: 2.0, note: "" },
			{ merchant: "特力屋", percent: 2.0, note: "" },
			{ merchant: "HOLA", percent: 2.0, note: "" },
			{ merchant: "振宇五金", percent: 2.0, note: "" }
		] 
    }
];

const DEFAULT_MERCHANTS = [
    "7-11", "foodpanda", "全聯", "家樂福", "Uber Eats",
    "蝦皮", "全家", "KFC"
];

let cards = DEFAULT_CARDS; 
let commonMerchants = DEFAULT_MERCHANTS;
let payments = DEFAULT_PAYMENTS; 
let manualMerchants = []; 
let currentView = 'query'; 

// 固定三個計算機項目
let rewardComponentsData = []; 

// --- 視圖管理與選單邏輯 (保持不變) ---

/**
 * 根據名稱切換主內容區塊的顯示。
 * @param {string} viewName - 欲切換的視圖名稱 ('query', 'calculator', 'cardManager', 'paymentManager')
 */
function showView(viewName) {
    currentView = viewName;
    const views = document.querySelectorAll('.main-view');
    views.forEach(view => {
        view.style.display = 'none';
    });
    
    // 顯示目標視圖
    const targetView = document.getElementById(viewName + 'View');
    if(targetView) {
        targetView.style.display = 'flex'; // 使用 flex 確保內容可以置中
    }
    
    // 重新計算主內容區的 padding
    setTimeout(setMainContentPadding, 10);
}

/**
 * 切換漢堡選單的開啟/關閉狀態 (從左邊開啟)
 */
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');
    
    const isMenuOpen = menu.classList.contains('menu-open');

    if (isMenuOpen) {
        // 關閉選單
        menu.classList.remove('menu-open');
        overlay.style.display = 'none';
    } else {
        // 開啟選單
        menu.classList.add('menu-open');
        overlay.style.display = 'block';
        
        // 確保選單打開時，如果有子選單是展開狀態，其高度能正確計算
        const subMenus = document.querySelectorAll('.sub-menu.active');
        subMenus.forEach(subMenu => {
             // 使用固定的值搭配 CSS 內層捲動
             subMenu.style.maxHeight = "300px"; 
        });
    }
}

/**
 * 處理選單點擊事件，切換到指定視圖並關閉選單。
 * @param {string} viewName - 欲導航的視圖名稱 ('query', 'calculator', 'cardManager', 'paymentManager')。
 * @param {string} [data=null] - 針對 cardManager/paymentManager 的名稱。
 */
function navigateToView(viewName, data = null) {
    const menu = document.getElementById('side-menu');
    
    if (menu.classList.contains('menu-open')) {
        toggleMenu(); // 關閉選單
    }

    // 只要是點擊查詢或計算機，就會切換視圖，同時自動跳離詳情頁面
    if (viewName === 'query') {
        showView('query');
        searchMerchant(); // 返回查詢頁面時，執行查詢
    } else if (viewName === 'calculator') {
        showView('calculator');
        renderRewardComponents(); 
        calculateReward();
    } else if (viewName === 'cardManager' && data) {
        showView('cardManager');
        renderDetailView(data, null);
    } else if (viewName === 'paymentManager' && data) {
        showView('paymentManager');
        renderDetailView(null, data);
    } else {
         showView(viewName);
         const defaultHTML = (title, message) => `
            <div class='content-wrapper' style='max-width: 900px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);'>
                <h2 id='${title}'>${title}</h2>
                <p style='padding: 20px;'>${message}</p>
            </div>
        `;
         
         if (viewName === 'cardManager') {
             document.getElementById('cardManagerContent').innerHTML = defaultHTML('卡片詳情', '請從左側選單選擇一張卡片查看詳情。');
         } else if (viewName === 'paymentManager') {
             document.getElementById('paymentManagerContent').innerHTML = defaultHTML('支付詳情', '請從左側選單選擇一個支付方式查看詳情。');
         }
    }
}

// --- 漏斗選單邏輯 (保持不變) ---

/**
 * 渲染卡片和支付方式列表到側邊選單中。
 */
function renderManagerMenu() {
    const cardMenu = document.getElementById('cardSubMenu');
    const paymentMenu = document.getElementById('paymentSubMenu');
    
    if (!cardMenu || !paymentMenu) return;
    
    // 渲染卡片 (新增 .scroll-list-wrapper 容器)
    const cardLinks = cards.map(card => {
        // 點擊後跳轉到 cardManagerView 並顯示該卡片詳情
        return `<a href="javascript:void(0)" onclick="navigateToView('cardManager', '${card.name}')">${card.name}</a>`;
    }).join('');
    cardMenu.innerHTML = `<div class="scroll-list-wrapper">${cardLinks}</div>`;
    
    // 渲染支付方式 (新增 .scroll-list-wrapper 容器)
    const paymentLinks = payments.map(payment => {
        // 點擊後跳轉到 paymentManagerView 並顯示該支付詳情
        return `<a href="javascript:void(0)" onclick="navigateToView('paymentManager', '${payment.name}')">${payment.name}</a>`;
    }).join('');
    paymentMenu.innerHTML = `<div class="scroll-list-wrapper">${paymentLinks}</div>`;
}


/**
 * 切換側邊選單內子選單的顯示狀態 (漏斗功能)
 * @param {string} menuId - 子選單的 ID ('cardSubMenu' 或 'paymentSubMenu')
 */
function toggleSubMenu(menuId) {
    const subMenu = document.getElementById(menuId);
    if (subMenu) {
        const isActive = subMenu.classList.contains('active');
        
        // 切換目標子選單
        if (isActive) {
            subMenu.classList.remove('active');
            subMenu.style.maxHeight = '0';
        } else {
            subMenu.classList.add('active');
            // 使用固定的 max-height 300px 進行過渡動畫
            subMenu.style.maxHeight = "300px"; 
        }
    }
}


// --- 回饋計算機邏輯 (保持不變) ---

/**
 * 更新單一回饋組件的數據並重新計算。
 * @param {number} id - 組件 ID。
 * @param {string} field - 欲更新的欄位 ('percent' 或 'rounding')。
 * @param {string} value - 新值。
 */
function updateRewardComponent(id, field, value) {
    const component = rewardComponentsData.find(c => c.id === id);
    if (component) {
        if (field === 'percent') {
            // 處理空字串輸入
            component.percent = value.trim() === '' ? 0 : parseFloat(value) || 0;
        } else if (field === 'rounding') {
            component.rounding = value;
        }
    }
    calculateReward();
}

/**
 * 渲染回饋計算組件的 HTML (固定 3 個項目)。
 */
function renderRewardComponents() {
    const container = document.getElementById('rewardComponents');
    if(!container) return;
    
    container.innerHTML = '';
    
    rewardComponentsData.forEach((component, index) => {
        // 處理第三個項目為空白顯示
        const inputValue = component.percent === 0 ? '' : component.percent;
        const placeholder = component.percent === 0 ? '空白' : '';

        const componentHTML = `
            <div class="reward-component" data-id="${component.id}">
                <div class="component-header">
                    <strong style="color: #ff9900;">回饋項目 ${index + 1}</strong>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div>
                        <label for="percent-${component.id}">回饋比例 (%)</label>
                        <input type="number" id="percent-${component.id}" class="percent-input" step="0.1" 
                               value="${inputValue}" 
                               placeholder="${placeholder}"
                               oninput="updateRewardComponent(${component.id}, 'percent', this.value)">
                    </div>
                    <div>
                        <label for="rounding-${component.id}">回饋方式</label>
                        <select id="rounding-${component.id}" onchange="updateRewardComponent(${component.id}, 'rounding', this.value)">
                            <option value="round" ${component.rounding === 'round' ? 'selected' : ''}>四捨五入</option>
                            <option value="floor" ${component.rounding === 'floor' ? 'selected' : ''}>無條件捨去</option>
                            <option value="ceil" ${component.rounding === 'ceil' ? 'selected' : ''}>無條件進位</option>
                        </select>
                    </div>
                </div>
                <div class="component-result">
                    計算結果: <span id="result-${component.id}">0.00 -> 0.00</span> 
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', componentHTML);
    });
}

/**
 * 根據選擇的方法應用進位邏輯。 (回傳整數)
 */
function applyRounding(amount, method) {
    switch (method) {
        case 'round':
            return Math.round(amount);
        case 'floor':
            return Math.floor(amount);
        case 'ceil':
            return Math.ceil(amount);
        default:
            return Math.round(amount);
    }
}

/**
 * 執行核心回饋計算邏輯。 (結果顯示小數點與 Raw -> Rounded)
 */
function calculateReward() {
    const baseAmountInput = document.getElementById('baseAmount');
    if (!baseAmountInput) return;
    
    const baseAmount = parseFloat(baseAmountInput.value) || 0;
    let totalReward = 0;
    
    rewardComponentsData.forEach(component => {
        // 使用 component.percent, 即使是 0 (空輸入)，計算結果也會是 0
        const rewardRate = component.percent / 100;
        const rawReward = baseAmount * rewardRate;
        // 透過 applyRounding 取得根據規則處理後的整數回饋值
        const roundedReward = applyRounding(rawReward, component.rounding);
        
        totalReward += roundedReward;
        
        // 單一組件顯示 Raw -> Rounded 結果 (兩位小數點)
        const resultSpan = document.getElementById(`result-${component.id}`);
        if (resultSpan) {
             resultSpan.textContent = `${rawReward.toFixed(2)} -> ${roundedReward.toFixed(2)}`; 
        }
    });

    // 總結果顯示 Rounded Total (兩位小數點)
    document.getElementById('totalRewardAmount').textContent = totalReward.toFixed(2); 
}


// --- UI 渲染與初始化 (保持不變) ---

function renderMerchantButtons() {
    const container = document.getElementById("commonMerchants");
    container.innerHTML = "";
    
    commonMerchants.forEach(merchant => {
        const button = document.createElement("button");
        button.textContent = merchant;
        button.className = "merchant-button";
        button.onclick = () => toggleMerchantSelection(button);
        container.appendChild(button);
    });
}

function renderDetailView(cardName = null, paymentName = null) {
    let targetElement = null;
    if (cardName) {
        targetElement = document.getElementById("cardManagerContent");
        const card = cards.find(c => c.name === cardName);
        if (card) {
            // 確保內容是被 content-wrapper 包裹的
            targetElement.innerHTML = `<div class='content-wrapper'>${displayCardDetailHTML(card)}</div>`;
            document.getElementById('cardManagerTitle').textContent = '卡片詳情';
        }
    } else if (paymentName) {
        targetElement = document.getElementById("paymentManagerContent");
        const payment = payments.find(p => p.name === paymentName);
        if (payment) {
             // 確保內容是被 content-wrapper 包裹的
             targetElement.innerHTML = `<div class='content-wrapper'>${displayPaymentDetailHTML(payment)}</div>`;
             document.getElementById('paymentManagerTitle').textContent = '支付詳情';
        }
    }
}

function init() {
    // 初始化計算機數據，固定 3 個項目與預設值
    rewardComponentsData = [
        { id: 1, percent: 0.5, rounding: 'round' }, // 0.5%
        { id: 2, percent: 2.5, rounding: 'round' }, // 2.5%
        { id: 3, percent: 0, rounding: 'round' }    // 空白 (值為 0)
    ];

    renderMerchantButtons();
    setMainContentPadding();
    updateSelectedMerchantsDisplay(); 
    renderManagerMenu(); 
    
    document.getElementById('currentFeatureTitle').textContent = "查詢結果";
    
    // 預設進入查詢頁面
    showView('query'); 
}

function setMainContentPadding() {
    const headerContent = document.getElementById('fixed-header-content');
    const mainContent = document.getElementById('main-content');
    
    const headerHeight = headerContent.offsetHeight; 
    
    // 確保 main-content 的頂部 padding 剛好等於固定 header 的高度
    mainContent.style.paddingTop = `${headerHeight}px`; 
}

window.addEventListener('resize', setMainContentPadding);
window.addEventListener('load', setMainContentPadding);

/**
 * 處理查詢結果中的卡片/支付名稱點擊事件 (用於內部切換到詳情頁面)
 * @param {string} mode - 'cardDetail' 或 'paymentDetail'。
 * @param {string} data - 卡片或支付方式的名稱。
 */
function switchFeature(mode, data = null) {
    // 這裡只負責內部視圖切換
    if (mode === 'cardDetail') {
        showView('cardManager');
        renderDetailView(data, null);
    } else if (mode === 'paymentDetail') {
        showView('paymentManager');
        renderDetailView(null, data);
    }
}


// --- 手動輸入通路邏輯 (修復跳轉) ---

// 獲取所有已選通路列表 (常用按鈕 + 手動標籤)
function getAllSelectedMerchants() {
    const selectedCommonMerchants = Array.from(document.querySelectorAll('#commonMerchants .merchant-button.selected')).map(btn => btn.textContent);
    const tagsMerchants = manualMerchants;
    return [...new Set([...selectedCommonMerchants, ...tagsMerchants])];
}

// 渲染手動新增的標籤
function updateSelectedMerchantsDisplay() {
    const tagContainer = document.getElementById('selectedMerchantTags');
    if (!tagContainer) return;
    
    tagContainer.innerHTML = '';
    
    manualMerchants.forEach(merchant => {
        const tag = document.createElement('span');
        tag.className = 'manual-merchant-tag'; 
        tag.textContent = merchant + ' ✕'; 
        tag.dataset.merchant = merchant; 
        tag.title = '點擊移除';
        tag.onclick = () => {
            removeManualMerchant(merchant);
        };
        tagContainer.appendChild(tag);
    });
}

// 處理手動新增通路
function addManualMerchant() {
    const input = document.getElementById('manualMerchantInput');
    const merchantName = input.value.trim();
    
    if (!merchantName) return;

    const allSelected = getAllSelectedMerchants();

    if (allSelected.includes(merchantName)) {
        alert(`通路 ${merchantName} 已存在於列表中。`);
        return;
    }
    
    if (commonMerchants.includes(merchantName)) {
         const commonButtons = Array.from(document.querySelectorAll('#commonMerchants .merchant-button'));
         const existingButton = commonButtons.find(btn => btn.textContent === merchantName);
         
         if (existingButton) {
             if (!existingButton.classList.contains('selected')) {
                 existingButton.classList.add('selected');
             }
             alert(`通路 ${merchantName} 為常用通路，已為您自動選取。`);
         } else {
             alert(`通路 ${merchantName} 為常用通路，請直接點擊選取。`);
         }
         input.value = '';
         
         // FIX: 手動新增時，確保切換回查詢視圖
         if (currentView !== 'query') {
             showView('query'); 
         }
         
         searchMerchant(); 
         return;
    }

    manualMerchants.push(merchantName);
    input.value = ''; 
    updateSelectedMerchantsDisplay();
    
    // FIX: 手動新增時，確保切換回查詢視圖
    if (currentView !== 'query') {
        showView('query'); 
    }
    
    searchMerchant(); 
}

// 處理手動移除通路
function removeManualMerchant(merchantName) {
    manualMerchants = manualMerchants.filter(m => m !== merchantName);
    updateSelectedMerchantsDisplay();
    searchMerchant(); 
}

// 常用通路按鈕切換選擇狀態
function toggleMerchantSelection(button) {
    button.classList.toggle('selected');
    
    // FIX: 當在非查詢視圖 (如詳情頁) 點擊常用通路按鈕時，強制切換回查詢視圖
    if (currentView !== 'query') {
        showView('query'); 
    }
    
    searchMerchant(); 
}

// --- 重置功能 (保持不變) ---

function resetAllSelectedMerchants() {
    manualMerchants = [];
    updateSelectedMerchantsDisplay();
    
    const selectedButtons = document.querySelectorAll('#commonMerchants .merchant-button.selected');
    selectedButtons.forEach(button => {
        button.classList.remove('selected');
    });
    
    searchMerchant(); 

    const resultDiv = document.getElementById("searchResult");
    document.getElementById('currentFeatureTitle').textContent = "查詢結果";
    resultDiv.innerHTML = "<p style='color: #dc3545; font-weight: bold;'>已清空所有已選通路和手動新增通路。</p><p>請點擊上方的常用通路按鈕或手動新增通路開始查詢。</p>";
}


// --- 核心查詢邏輯 (已調整頂部標題) ---

function searchMerchant() {
    if (currentView !== 'query') {
        return;
    }

    const uniqueKeywords = getAllSelectedMerchants();
    const resultDiv = document.getElementById("searchResult");

    if (!resultDiv) {
        console.error("Error: Element with ID 'searchResult' not found.");
        return;
    }

    if (uniqueKeywords.length === 0) {
        document.getElementById('currentFeatureTitle').textContent = "查詢結果";
        resultDiv.innerHTML = "<p>請點擊上方的常用通路按鈕或手動新增通路開始查詢。</p>";
        return;
    }

    let totalMatchesFound = 0;
    document.getElementById('currentFeatureTitle').textContent = `查詢通路：${uniqueKeywords.join('、')}`;
    let resultsHTML = `<div class="multi-search-result">`;
    resultsHTML += `<hr style="margin-top: 5px;">`;

    uniqueKeywords.forEach(keyword => {
        const lowerKeyword = keyword.toLowerCase();
        let matches = [];

        // 1. 搜尋信用卡
        cards.forEach(card => {
            card.groups.forEach(group => {
                group.rewards.forEach(r => {
                    if (r.merchant.toLowerCase().includes(lowerKeyword)) {
                        matches.push({
                            type: 'card',
                            name: card.name,
                            group: group.name,
                            isToggle: getToggleStatus(card, group),
                            merchant: r.merchant,
                            percent: r.percent,
                            note: r.note
                        });
                    }
                });
            });
        });

        // 2. 搜尋支付方式（包括獨立和附屬）
        payments.forEach(p => {
            if (p.rewards) {
                p.rewards.forEach(r => {
                    if (r.merchant.toLowerCase().includes(lowerKeyword)) {
                        if (p.isStandalone) {
                            matches.push({
                                type: 'payment',
                                name: p.name,
                                group: '(獨立支付)',
                                isToggle: '',
                                merchant: r.merchant,
                                percent: r.percent,
                                note: r.note
                            });
                        } else {
                            const linkedParts = p.linkedCardGroup ? p.linkedCardGroup.split('.') : [];
                            const cardName = linkedParts[0]?.trim() || '';
                            const groupNameMatch = linkedParts.length > 1 ? linkedParts[1].match(/^(.*?)(?:\s*\([^)]*\))?$/i) : null;
                            const groupName = groupNameMatch ? (groupNameMatch[1] || '').trim() : '';
                            const linkedCard = cards.find(c => c.name === cardName);
                            const linkedGroup = linkedCard ? linkedCard.groups.find(g => g.name === groupName) : null;
                            const isToggle = linkedCard && linkedGroup ? getToggleStatus(linkedCard, linkedGroup) : '';
                            matches.push({
                                type: 'payment_linked',
                                name: p.name,
                                group: linkedCard ? `${cardName} ${groupName}` : '',
                                isToggle: isToggle,
                                merchant: r.merchant,
                                percent: r.percent,
                                note: r.note
                            });
                        }
                    }
                });
            }
        });

        matches.sort((a, b) => b.percent - a.percent);
        totalMatchesFound += matches.length;

        resultsHTML += `
            <div class="merchant-group-result">
                <h4 style="margin: 0 0 10px 0; color: #333; font-size: 1.2em;">通路名稱: <strong style="color: #007bff;">${keyword}</strong></h4>
        `;

        if (matches.length === 0) {
            resultsHTML += `<p style="color: red;">查無此通路的任何回饋方案。</p>`;
        } else {
            matches.forEach(r => {
                let linkMode, linkData, mainSource, schemeText;
                const noteInParens = r.note ? `<span class="search-result-note">(${r.note})</span>` : '';

                if (r.type === 'card') {
                    linkMode = 'cardDetail';
                    linkData = r.name;
                    mainSource = `<a href="javascript:void(0)" onclick="switchFeature('${linkMode}', '${linkData}'); return false;" style="color: #007bff; font-weight: bold; text-decoration: none;">${r.name}</a>`;
                    schemeText = r.isToggle ? `<span style="color: #ff9900;">${r.group}<span class="no-toggle-status">${r.isToggle}</span></span>` : `<span style="color: #ff9900;">${r.group}</span>`;
                } else if (r.type === 'payment') {
                    linkMode = 'paymentDetail';
                    linkData = r.name;
                    mainSource = `<a href="javascript:void(0)" onclick="switchFeature('${linkMode}', '${linkData}'); return false;" style="color: #007bff; font-weight: bold; text-decoration: none;">${r.name}</a>`;
                    schemeText = `<span style="color: #ff9900;">${r.group}</span>`;
                } else if (r.type === 'payment_linked') {
                    linkMode = 'paymentDetail';
                    linkData = r.name;
                    mainSource = `<a href="javascript:void(0)" onclick="switchFeature('${linkMode}', '${linkData}'); return false;" style="color: #007bff; font-weight: bold; text-decoration: none;">${r.name}</a>`;
                    const cardName = r.group.split(' ')[0];
                    const groupName = r.group.substring(cardName.length + 1);
                    schemeText = r.isToggle ? `<span style="color: #ff9900;">${cardName} ${groupName}<span class="no-toggle-status">${r.isToggle}</span></span>` : `<span style="color: #ff9900;">${r.group}</span>`;
                }

                resultsHTML += `
                    <div>
                        <span class="search-result-percent">${r.percent}%</span> - 
                        ${mainSource} - 
                        ${schemeText} - 
                        ${r.merchant} 
                        ${noteInParens}
                    </div>
                `;
            });
        }

        resultsHTML += `</div>`;
    });

    resultsHTML += `</div>`;
    resultDiv.innerHTML = resultsHTML;
}


// --- 詳情頁面渲染邏輯 (已修改排版) ---

function displayCardDetailHTML(card) {
    let html = `
        <div class="card-detail-view">
            <h3>${card.name} 詳情 ${card.isToggleCard ? '(切換卡)' : ''}</h3>
    `;
    
    if (card.cardNote) {
        html += `<div class="card-note-large">${card.cardNote.replace(/\n/g, '<br>')}</div>`;
    }

    card.groups.forEach(group => {
        const toggleStatus = getToggleStatus(card, group);
        const toggleStyle = toggleStatus === '(免切換)' ? 'color:#28a745; font-size: 0.9em;' : 'color:#dc3545; font-size: 0.9em;';
        
        html += `
            <div class="reward-group-display">
                <strong>${group.name}</strong> <span style="${toggleStyle}">${toggleStatus}</span>
        `;
        
        if (group.groupNote) {
            html += `<div class="reward-group-note">${group.groupNote}</div>`;
        }

        html += `<div class="reward-list" style="display: flex; flex-direction: column; gap: 5px;">`; 
        group.rewards.forEach(r => {
            const noteText = r.note ? `<span class="reward-list-item-note" style="color: #6c757d;"> (${r.note})</span>` : '';
            html += `
                <div class="reward-list-item" style="display: flex; align-items: baseline;">
                    <span class="reward-list-item-percent" style="font-weight: bold; color: #ff9900; width: 60px; text-align: right; padding-right: 10px; font-size: 1.1em;">
                        ${r.percent}%
                    </span>
                    <span class="reward-list-item-merchant" style="flex-grow: 1;">
                        ${r.merchant}
                    </span>
                    ${noteText}
                </div>
            `;
        });
        html += `</div>`;
        html += `</div>`;
    });

    html += `</div>`;
    return html;
}

function displayPaymentDetailHTML(payment) {
    let html = `
        <div class="payment-detail-view card-detail-view">
            <h3>${payment.name} 詳情 ${payment.isStandalone ? '(獨立支付)' : '(附屬支付)'}</h3>
    `;

    if (payment.paymentNote) {
        html += `<div class="payment-note-large">${payment.paymentNote.replace(/\n/g, '<br>')}</div>`;
    }

    if (payment.rewards && payment.rewards.length > 0) {
        html += `<h4>${payment.isStandalone ? '獨立回饋方案' : '支付方式回饋'}</h4>`;
        html += `<div class="reward-list" style="display: flex; flex-direction: column; gap: 5px;">`;
        payment.rewards.forEach(r => {
            const noteText = r.note ? `<span class="reward-list-item-note" style="color: #6c757d;"> (${r.note})</span>` : '';
            html += `
                <div class="reward-list-item" style="display: flex; align-items: baseline;">
                    <span class="reward-list-item-percent" style="font-weight: bold; color: #ff9900; width: 60px; text-align: right; padding-right: 10px; font-size: 1.1em;">
                        ${r.percent}%
                    </span>
                    <span class="reward-list-item-merchant" style="flex-grow: 1;">
                        ${r.merchant}
                    </span>
                    ${noteText}
                </div>
            `;
        });
        html += `</div>`;
    } else {
        html += `<p style="color: #6c757d;">無獨立回饋，需透過綁定卡片方案提供回饋。</p>`;
    }

    if (!payment.isStandalone && payment.linkedCardGroup) {
        html += `<h4>綁定卡片權益</h4>`;
        html += `<p>此支付方式回饋依賴於：<strong style="color:#007bff;">${payment.linkedCardGroup}</strong> 方案的通路回饋。</p>`;
        
        const linkedParts = payment.linkedCardGroup.split('.');
        const cardName = linkedParts[0].trim();
        const groupNameMatch = linkedParts.length > 1 ? linkedParts[1].match(/^(.*?)\s*$$ [^)]* $$$|^(.*)$/) : null;
        const groupName = groupNameMatch ? (groupNameMatch[1] || groupNameMatch[2]).trim() : '';

        const linkedCard = cards.find(c => c.name === cardName);
        if (linkedCard) {
            const linkedGroup = linkedCard.groups.find(g => g.name === groupName);
            if (linkedGroup) {
                const toggleStatus = getToggleStatus(linkedCard, linkedGroup);
                const toggleStyle = toggleStatus === '(免切換)' ? 'color:#28a745; font-size: 0.9em;' : 'color:#dc3545; font-size: 0.9em;';
                const displayGroupName = toggleStatus === '(免切換)' ? '(免切換)' : groupName;
                html += `
                    <div class="reward-group-display">
                        <strong>適用群組: ${cardName} ${displayGroupName}</strong> <span style="${toggleStyle}">${toggleStatus}</span>
                `;
                if (linkedGroup.groupNote) {
                    html += `<div class="reward-group-note">${linkedGroup.groupNote}</div>`;
                }
                
                html += `<div class="reward-list" style="display: flex; flex-direction: column; gap: 5px;">`;
                if (linkedGroup.rewards.length > 0) {
                    linkedGroup.rewards.forEach(r => {
                        const finalNote = r.note || `透過 ${payment.name} 支付適用`;
                        const noteText = finalNote ? `<span class="reward-list-item-note" style="color: #6c757d;"> (${finalNote})</span>` : '';
                        html += `
                            <div class="reward-list-item" style="display: flex; align-items: baseline;">
                                <span class="reward-list-item-percent" style="font-weight: bold; color: #ff9900; width: 60px; text-align: right; padding-right: 10px; font-size: 1.1em;">
                                    ${r.percent}%
                                </span>
                                <span class="reward-list-item-merchant" style="flex-grow: 1;">
                                    ${r.merchant}
                                </span>
                                ${noteText}
                            </div>
                        `;
                    });
                } else {
                    html += `<p style="color: #6c757d;">無特定通路回饋，請參考支付方式的通路列表。</p>`;
                }
                html += `</div>`;
                html += `</div>`;
            }
        }
    }

    html += `</div>`;
    return html;
}

/**
 * 根據卡片和群組的切換狀態返回顯示文字（僅免切換顯示）
 * @param {Object} card - 卡片物件
 * @param {Object} group - 群組物件
 * @returns {string} - 僅在 needsToggle: false 時返回 '(免切換)'，否則返回空字串
 */
function getToggleStatus(card, group) {
    if (!card.isToggleCard || !group.needsToggle) {
        return '(免切換)';
    }
    return ''; // 需切換時不顯示任何標記
}


// 初始化執行
init();