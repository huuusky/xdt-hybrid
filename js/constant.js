/**
 * Created by LiKun on 2016/1/28.
 */
/*var DAY_OF_WEEK = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
var PARTS_MAP = {
    "A": "车顶",
    "B": "前引擎盖",
    "C": "前保险杠",
    "D": "前翼子板右侧",
    "E": "前翼子板左侧",
    "F": "前车门右侧",
    "G": "前车门左侧",
    "H": "后车门左侧",
    "I": "后车门右侧",
    "J": "后翼子板右侧",
    "K": "后翼子板左侧",
    "L": "后车盖",
    "M": "后保险杠",
    "N": "右侧下裙边",
    "O": "左侧下裙边",
    "P": "左侧后视镜",
    "Q": "右侧后视镜",
    "R": "左A柱",
    "S": "左B柱",
    "T": "左C柱",
    "U": "右A柱 ",
    "V": "右B柱",
    "W": "右C柱"
};*/

var preferentialData = {
    "today": [
        2016,
        4,
        16
    ],
    "merchant": {
        "shopId": 7,
        "categoryName": null,
        "address": "深圳市南山区南头关关口二路嘉进隆前海汽车城A区二楼",
        "defaultLogo": "http://113.98.58.23:8020/static/2016/04/18/09/0c509e44-d7e9-4330-aa8e-c662ed0e413d.jpg",
        "shopName": "一汽马自达前海4S店",
        "evaluateScore": 0,
        "evaluateTotal": 0,
        "distance": -1,
        "longitude": 113.912196,
        "latitude": 22.554148,
        "payMethods": {
            "unionPay": false,
            "aliPay": true,
            "weiPay": true,
            "video": true
        },
        "mainBusiness": null,
        "serviceScore": 0,
        "envScore": 0,
        "techScore": 0,
        "telephone": "0755-26089201",
        "brandName": null,
        "bannerCount": 0,
        "services": null,
        "banners": null,
        "evalutions": null,
        "recommendService": null
    },
    "promotionWeekPlans": [
        {
            "dayOfWeek": 0,
            "currentDate": "2016-05-15",
            "promotionDayPlans": [
                {
                    "timePeriod": "08:00-20:00",
                    "promotionValue": 0.01,
                    "promotionTypeName": "返礼品"
                }
            ]
        },
        {
            "dayOfWeek": 1,
            "currentDate": "2016-05-16",
            "promotionDayPlans": [
                {
                    "timePeriod": "08:00-20:00",
                    "promotionValue": 0.02,
                    "promotionTypeName": "返礼品"
                }
            ]
        },
        {
            "dayOfWeek": 2,
            "currentDate": "2016-05-17",
            "promotionDayPlans": [
                {
                    "timePeriod": "08:00-20:00",
                    "promotionValue": 0.03,
                    "promotionTypeName": "返礼品"
                }
            ]
        },
        {
            "dayOfWeek": 3,
            "currentDate": "2016-05-18",
            "promotionDayPlans": [
                {
                    "timePeriod": "08:00-20:00",
                    "promotionValue": "精美小礼品一份",
                    "promotionTypeName": "返礼品"
                }
            ]
        },
        {
            "dayOfWeek": 4,
            "currentDate": "2016-05-19",
            "promotionDayPlans": [
                {
                    "timePeriod": "08:00-20:00",
                    "promotionValue": "精美小礼品一份",
                    "promotionTypeName": "返礼品"
                }
            ]
        },
        {
            "dayOfWeek": 5,
            "currentDate": "2016-05-20",
            "promotionDayPlans": [
                {
                    "timePeriod": "08:00-20:00",
                    "promotionValue": "精美小礼品一份",
                    "promotionTypeName": "返礼品"
                }
            ]
        },
        {
            "dayOfWeek": 6,
            "currentDate": "2016-05-21",
            "promotionDayPlans": [
                {
                    "timePeriod": "08:01-20:01",
                    "promotionValue": "精美小礼品一份",
                    "promotionTypeName": "返礼品"
                }
            ]
        }
    ],
    "carLicenseNumber": "粤B929XH",
    "contactsPhone": "13424330217",
    "contactsName": "Test",
    "serviceId": null
};

var orderData = {
    "title": null,
    "desc": null,
    "fromType": "01",
    "shopId": 1,
    "shopName": "行得通自营店",
    "telephone": "4008727340",
    "address": "深圳市龙华新区清湖市场综合楼",
    "recommendServices": [],
    "carId": 239,
    "appointment": null,
    "couponId": null,
    "couponAmount": null,
    "hasPickupService": false,
    "pickupServiceId": null,
    "services": [],
    "servicesTotalPrice": 0,
    "contactsName": "哈哈",
    "contactsPhone": "13128900862",
    "contactsAddress": null,
    "carLicenseNumber": "粤b54442",
    "userId": 3970,
    "coupons": [],
    "serviceNetwork": [
        {
            "shopName": "通利华龙华店",
            "shopAddress": "清湖市场",
            "shopPhone": "400",
            "longitude": "113",
            "latitude": "22"
        },
        {
            "shopName": "海马汽车龙华4S店",
            "shopAddress": "深圳市龙华新区清湖市场综合楼",
            "shopPhone": "0755-28062522",
            "longitude": "114.043618",
            "latitude": "22.681359"
        },
        {
            "shopName": "长安马自达坂田4s店",
            "shopAddress": "深圳市坂田坂雪岗大道与布龙路交汇处富豪花园荣兴大厦首层104号（坂田地铁站A出口）",
            "shopPhone": "0755-86106833",
            "longitude": "114.07686",
            "latitude": "22.632657"
        },
        {
            "shopName": "海马汽车宝安4S店",
            "shopAddress": "深圳市宝安区宝安大道与新和路交汇处东山书院旁通利华大厦",
            "shopPhone": "0755-88218323",
            "longitude": "113.831562",
            "latitude": "22.755891"
        }
    ]
};

var orderDetailData = {
    "orderInfo": {
        "orderNo": "XDT2016053100002",
        "title": "喷漆+++",
        "itemDesc": "",
        "verifyCode": null,
        "totalAmount": 0.01,
        "ticketAmount": 200,
        "payAmount": -199.99,
        "createDate": "2016/05/31 11:12:02",
        "notifyUrl": {
            "unionPay": "http://192.168.168.188:8020/mobile-web/v2/pay/payNotify/unionPay",
            "aliPay": "http://192.168.168.188:8020/mobile-web/v2/pay/payNotify/aliPay",
            "weixinPay": "http://192.168.168.188:8020/mobile-web/v2/pay/payNotify/weixinPay"
        }
    },
    "serviceInfo": {
        "carLicenseNumber": "京b33333",
        "mileage": null,
        "shopName": "行得通自营店",
        "shopAddress": "深圳市龙华新区清湖市场综合楼",
        "appointment": ""
    },
    "serviceProject": [
        {
            "title": "喷漆+++",
            "itemDescArray": [
                ""
            ],
            "totalAmount": 0.01
        }
    ],
    "pickupInfo": null,
    "contactsInfo": {
        "contactsName": "哈哈说",
        "contactsPhone": "13714544253",
        "contactsAddress": null
    },
    "serviceNetwork": null,
    "isPaid": 0
};

var adviserData = {
    "shopId": 2,
    "serviceCategoryCode": "01,02",
    "consultantList": [
        {
            "merchantId": 234,
            "merchantName": "海马旗舰店",
            "consultantId": 1,
            "consultantName": "隔壁老王",
            "image": "http://v2.xingdt.com:8020/static/2016/03/04/14/default_head.png",
            "title": "中级服务顾问",
            "ratingStars": 4.5,
            "receivedCount": 100
        },
        {
            "merchantId": null,
            "merchantName": null,
            "consultantId": 4,
            "consultantName": "琳达",
            "image": "http://v2.xingdt.com:8020/static/2016/03/04/14/default_head.png",
            "title": null,
            "ratingStars": 5,
            "receivedCount": 100
        },
        {
            "merchantId": null,
            "merchantName": null,
            "consultantId": 8,
            "consultantName": "13316830939",
            "image": "http://v2.xingdt.com:8020/static/2016/03/04/14/default_head.png",
            "title": null,
            "ratingStars": 0,
            "receivedCount": 0
        },
        {
            "merchantId": null,
            "merchantName": null,
            "consultantId": 6,
            "consultantName": "18938997688",
            "image": "http://v2.xingdt.com:8020/static/2016/03/04/14/default_head.png",
            "title": null,
            "ratingStars": 0,
            "receivedCount": 0
        },
        {
            "merchantId": null,
            "merchantName": null,
            "consultantId": 11,
            "consultantName": "黄顾问",
            "image": "http://v2.xingdt.com:8020/static/2016/03/04/14/default_head.png",
            "title": null,
            "ratingStars": 0,
            "receivedCount": 0
        },
        {
            "merchantId": null,
            "merchantName": null,
            "consultantId": 13,
            "consultantName": "魏武",
            "image": "http://v2.xingdt.com:8020/static/2016/03/04/14/default_head.png",
            "title": null,
            "ratingStars": 0,
            "receivedCount": 0
        },
        {
            "merchantId": null,
            "merchantName": null,
            "consultantId": 7,
            "consultantName": "V5",
            "image": "http://v2.xingdt.com:8020/static/2016/03/05/14/23d1e839-da8e-452b-a8e1-630bddea11cd_default_head.png",
            "title": null,
            "ratingStars": 0,
            "receivedCount": 0
        }
    ]
};

var technicianData = [
    {
        "technicianId": 1,
        "technicianName": "周技师",
        "image": "http://v2.xingdt.com:8020/static/2016/03/08/16/728f47a9-09ee-48af-ab2e-b3e872b08b07_1123.png",
        "title": null,
        "ratingStars": 0,
        "receivedCount": 0
    }
];

var appointmentDetailData = {
    "docNumber": "Y2016030300005",
    "consultantName": null,
    "serviceItems": [
        "钣喷"
    ],
    "orderProject": null,
    "orderProjectAmount": null,
    "appointmentTime": "2016-03-03 08:00-11:00",
    "contactsName": "A",
    "contactsPhone": "I'm",
    "carLicenseNumber": null,
    "currentStatus": "1",
    "taskId": null,
    "gmtCreate": "2016/03/03",
    "descPaths": [
        "http://v2.xingdt.com:8020/static",
        null,
        null
    ],
    "reservationId": 57,
    "remark": null
};

var indexData = {
    "taskCount": 15,
    "messsageCount": 0,
    "evaluationCount": 0,
    "receiptsByMonth": 49,
    "incomeByMonth": 2000,
    "employee": {
        "employeeId": 11,
        "name": "琳达",
        "appUserId": 4,
        "image": "http://v2.xingdt.com:8020/static/2016/02/25/18/f3a10ea3-d92a-4724-aab7-e6be842f4ba1_thumb_5645abbb9ad39.jpg",
        "status": 0,
        "employeeNo": "100257",
        "title": null,
        "shopId": 2,
        "phone": "13128900862",
        "categoryTag": null,
        "ratingStars": 5,
        "servedCount": 100,
        "roleType": 1
    },
    "bannerList": [
        {
            "picURL": "http://v2.xingdt.com:8020/static/2016/01/15/18/6e1b5edc-7b49-44dd-a297-334cd29e9cd5_shop.jpg",
            "linkURL": "www.xingdt.com"
        }
    ]
};

var feedbackData = {
    "count": 6,
    "evaluationList": [
        {
            "serviceScore": 4,
            "technologyScore": 4,
            "comments": "Qqqq",
            "createDate": "2016-02-25 10:03:51",
            "operator": "13714544253"
        },
        {
            "serviceScore": 5,
            "technologyScore": 5,
            "comments": "",
            "createDate": "2016-02-24 10:24:58",
            "operator": "13714544253"
        },
        {
            "serviceScore": 4,
            "technologyScore": 4,
            "comments": "",
            "createDate": "2016-02-24 10:22:58",
            "operator": "13714544253"
        },
        {
            "serviceScore": 5,
            "technologyScore": 5,
            "comments": "",
            "createDate": "2016-02-24 10:24:58",
            "operator": "13714544253"
        },
        {
            "serviceScore": 4,
            "technologyScore": 4,
            "comments": "",
            "createDate": "2016-02-24 10:22:58",
            "operator": "13714544253"
        },
        {
            "serviceScore": 5,
            "technologyScore": 5,
            "comments": "",
            "createDate": "2016-02-24 10:24:58",
            "operator": "13714544253"
        },
        {
            "serviceScore": 4,
            "technologyScore": 4,
            "comments": "",
            "createDate": "2016-02-24 10:22:58",
            "operator": "13714544253"
        },
        {
            "serviceScore": 5,
            "technologyScore": 5,
            "comments": "",
            "createDate": "2016-02-24 10:24:58",
            "operator": "13714544253"
        },
        {
            "serviceScore": 4,
            "technologyScore": 4,
            "comments": "",
            "createDate": "2016-02-24 10:22:58",
            "operator": "13714544253"
        }
    ],
    "employee": {
        "employeeId": 11,
        "name": "琳达",
        "appUserId": 4,
        "image": "http://v2.xingdt.com:8020/static/2016/02/25/18/f3a10ea3-d92a-4724-aab7-e6be842f4ba1_thumb_5645abbb9ad39.jpg",
        "status": 0,
        "employeeNo": "100257",
        "title": null,
        "shopId": 2,
        "phone": "13128900862",
        "categoryTag": null,
        "ratingStars": 5,
        "servedCount": 100,
        "roleType": 1
    },
    "currentPage": 1
};

var monthlyIncomeData = [
    {
        "employeeId": 1,
        "totalIncome": 15000,
        "rating": 1,
        "reward": 1200,
        "percentage": 500,
        "statisticCycle": "2016年1月账单"
    },
    {
        "employeeId": 1,
        "totalIncome": 16000,
        "rating": 2,
        "reward": 1100,
        "percentage": 500,
        "statisticCycle": "2016年2月账单"
    },
    {
        "employeeId": 1,
        "totalIncome": 15000,
        "rating": 1,
        "reward": 1200,
        "percentage": 500,
        "statisticCycle": "2016年3月账单"
    },
    {
        "employeeId": 1,
        "totalIncome": 16000,
        "rating": 2,
        "reward": 1100,
        "percentage": 500,
        "statisticCycle": "2016年4月账单"
    },

];
var quarterlyIncomeData = [
    {
        "employeeId": 1,
        "totalIncome": 15000,
        "rating": 1,
        "reward": 1200,
        "percentage": 500,
        "statisticCycle": "2016年1季度账单"
    },
    {
        "employeeId": 1,
        "totalIncome": 16000,
        "rating": 2,
        "reward": 1100,
        "percentage": 500,
        "statisticCycle": "2016年2季度账单"
    },
    {
        "employeeId": 1,
        "totalIncome": 15000,
        "rating": 1,
        "reward": 1200,
        "percentage": 500,
        "statisticCycle": "2016年3季度账单"
    },
    {
        "employeeId": 1,
        "totalIncome": 16000,
        "rating": 2,
        "reward": 1100,
        "percentage": 500,
        "statisticCycle": "2016年4季度账单"
    }
];

var myMessageData = {
    "messages": [
        {
            "messageSrcType": 0,
            "title": "test",
            "content": "test",
            "pushTime": null,
            "isRead": 0
        },
        {
            "messageSrcType": 0,
            "title": "test",
            "content": "test",
            "pushTime": null,
            "isRead": 0
        },
        {
            "messageSrcType": 0,
            "title": "test",
            "content": "test",
            "pushTime": null,
            "isRead": 0
        },
        {
            "messageSrcType": 0,
            "title": "test",
            "content": "test",
            "pushTime": null,
            "isRead": 0
        },
        {
            "messageSrcType": 0,
            "title": "test",
            "content": "test",
            "pushTime": null,
            "isRead": 0
        },
        {
            "messageSrcType": 0,
            "title": "test",
            "content": "test",
            "pushTime": null,
            "isRead": 0
        },
        {
            "messageSrcType": 0,
            "title": "test",
            "content": "test",
            "pushTime": null,
            "isRead": 0
        },
        {
            "messageSrcType": 0,
            "title": "test",
            "content": "test",
            "pushTime": null,
            "isRead": 0
        },
        {
            "messageSrcType": 0,
            "title": "test",
            "content": "test",
            "pushTime": null,
            "isRead": 0
        },
        {
            "messageSrcType": 0,
            "title": "test",
            "content": "test",
            "pushTime": null,
            "isRead": 0
        }
    ],
    "count": 55,
    "currentPage": 1
};
var myTaskData = {
    "toConfirm": 0,
    "toReceive": 48,
    "toBill": 6,
    "toDisapatch": 0,
    "toWork": 0,
    "toComplete": 0,
    "toAccount": null
};
var activityData = {
    "total": 15,
    "rows": [
        {
            "id": 19,
            "name": "test 11231",
            "intro": "<p><span style=\"font-style: italic;\">123123111123顺丰</span></p>",
            "photoPath": "http://v2.xingdt.com:8020/static/2016/03/05/15/b960d1fe-dd4a-407c-b8f0-9da262879045_activity_list_01.jpg",
            "startTime": "2016-03-03 16:00:00",
            "endTime": "2016-03-30 16:00:00",
            "couponId": 16,
            "state": 2,
            "gmtCreate": "2016-03-05 07:25:29",
            "gmtModified": "2016-03-05 07:25:29",
            "city": "深圳市",
            "sourceType": null,
            "contentPath": "http://v2.xingdt.com:8020/XingdtEmbedPage/page/activity/registerNow.html",
            "couponName": "元宵优惠",
            "shopName": null
        },
        {
            "id": 18,
            "name": "测试活动134",
            "intro": "<p>测试活动1测试活动1测试活动13<br></p>",
            "photoPath": "http://v2.xingdt.com:8020/static/2016/03/05/15/484cc3a4-0f57-491d-8ba6-2cd003d8f17a_activity_list_01.jpg",
            "startTime": "2016-03-03 16:00:00",
            "endTime": "2016-03-30 16:00:00",
            "couponId": 16,
            "state": 2,
            "gmtCreate": "2016-03-05 07:25:01",
            "gmtModified": "2016-03-05 07:25:01",
            "city": "深圳市",
            "sourceType": null,
            "contentPath": "http://v2.xingdt.com:8020/XingdtEmbedPage/page/activity/registerNow.html",
            "couponName": "元宵优惠",
            "shopName": null
        },
        {
            "id": 17,
            "name": "测试活动88",
            "intro": "<p><span style=\"text-decoration: underline;\">测试活动6567测试活动1测试活动15567</span><br></p>",
            "photoPath": "http://v2.xingdt.com:8020/static/2016/03/05/15/3f4e1828-a225-4cf9-8cad-e26d47b73fb7_activity_list_01.jpg",
            "startTime": "2016-03-03 16:00:00",
            "endTime": "2016-03-30 16:00:00",
            "couponId": 16,
            "state": 2,
            "gmtCreate": "2016-03-05 07:24:39",
            "gmtModified": "2016-03-05 07:24:39",
            "city": "深圳市",
            "sourceType": null,
            "contentPath": "http://v2.xingdt.com:8020/XingdtEmbedPage/page/activity/registerNow.html",
            "couponName": "元宵优惠",
            "shopName": null
        },
        {
            "id": 16,
            "name": "测试活动7",
            "intro": "<p><span style=\"font-weight: bold; font-style: italic;\">测试活动33测试活动1测试活动1测试活动1测试活动1</span><br></p>",
            "photoPath": "http://v2.xingdt.com:8020/static/2016/03/05/15/52b07378-b279-47f7-a700-c63886077ae8_activity_list_01.jpg",
            "startTime": "2016-03-04 16:00:00",
            "endTime": "2016-03-30 16:00:00",
            "couponId": 16,
            "state": 2,
            "gmtCreate": "2016-03-05 07:24:15",
            "gmtModified": "2016-03-05 07:24:15",
            "city": "上海",
            "sourceType": null,
            "contentPath": "http://v2.xingdt.com:8020/XingdtEmbedPage/page/activity/registerNow.html",
            "couponName": "元宵优惠",
            "shopName": null
        },
        {
            "id": 15,
            "name": "测试活动6",
            "intro": "<p><span style=\"font-weight: bold;\">测试活动555</span><br></p>",
            "photoPath": "http://v2.xingdt.com:8020/static/2016/03/05/15/a830af97-41b7-43bc-a9f1-f2a1fe877f9e_activity_list_01.jpg",
            "startTime": "2016-03-02 16:00:00",
            "endTime": "2016-03-30 16:00:00",
            "couponId": 16,
            "state": 2,
            "gmtCreate": "2016-03-05 07:23:46",
            "gmtModified": "2016-03-05 07:23:46",
            "city": "北京",
            "sourceType": null,
            "contentPath": "http://v2.xingdt.com:8020/XingdtEmbedPage/page/activity/registerNow.html",
            "couponName": "元宵优惠",
            "shopName": null
        },
        {
            "id": 14,
            "name": "测试活动5",
            "intro": "<p>测试活动55555<br></p>",
            "photoPath": "http://v2.xingdt.com:8020/static/2016/03/05/15/a14779cc-5bb3-4fe7-80eb-34aa2e261b0c_activity_list_01.jpg",
            "startTime": "2016-03-03 16:00:00",
            "endTime": "2016-03-30 16:00:00",
            "couponId": 16,
            "state": 2,
            "gmtCreate": "2016-03-05 07:23:17",
            "gmtModified": "2016-03-05 07:23:17",
            "city": "广州市",
            "sourceType": null,
            "contentPath": "http://v2.xingdt.com:8020/XingdtEmbedPage/page/activity/registerNow.html",
            "couponName": "元宵优惠",
            "shopName": null
        },
        {
            "id": 13,
            "name": "测试活动4",
            "intro": "<p>测试活动4测试活动4<br></p>",
            "photoPath": "http://v2.xingdt.com:8020/static/2016/03/05/15/c2e2ab66-4fe9-4529-aa13-d18c89bace13_activity_list_01.jpg",
            "startTime": "2016-03-03 16:00:00",
            "endTime": "2016-03-30 16:00:00",
            "couponId": 16,
            "state": 2,
            "gmtCreate": "2016-03-05 07:22:48",
            "gmtModified": "2016-03-05 07:22:48",
            "city": "深圳市",
            "sourceType": null,
            "contentPath": "http://v2.xingdt.com:8020/XingdtEmbedPage/page/activity/registerNow.html",
            "couponName": "元宵优惠",
            "shopName": null
        },
        {
            "id": 12,
            "name": "测试活动2",
            "intro": "<p>测试活动33333<br></p>",
            "photoPath": "http://v2.xingdt.com:8020/static/2016/03/05/15/a4bcb37f-fd3c-4c6c-b995-c8482dd2c642_activity_list_01.jpg",
            "startTime": "2016-03-03 16:00:00",
            "endTime": "2016-03-30 16:00:00",
            "couponId": 16,
            "state": 2,
            "gmtCreate": "2016-03-05 07:22:21",
            "gmtModified": "2016-03-05 07:22:21",
            "city": "深圳市",
            "sourceType": null,
            "contentPath": "http://v2.xingdt.com:8020/XingdtEmbedPage/page/activity/registerNow.html",
            "couponName": "元宵优惠",
            "shopName": null
        },
        {
            "id": 11,
            "name": "测试活动2",
            "intro": "<p>测试活动2测试活动2测试活动2测试活动2<br></p>",
            "photoPath": "http://v2.xingdt.com:8020/static/2016/03/05/15/d3c425cc-e43d-4c6b-a679-373d1db7efb6_activity_list_01.jpg",
            "startTime": "2016-03-03 16:00:00",
            "endTime": "2016-03-30 16:00:00",
            "couponId": 16,
            "state": 2,
            "gmtCreate": "2016-03-05 07:21:56",
            "gmtModified": "2016-03-05 07:21:56",
            "city": "深圳市",
            "sourceType": null,
            "contentPath": "http://v2.xingdt.com:8020/XingdtEmbedPage/page/activity/registerNow.html",
            "couponName": "元宵优惠",
            "shopName": null
        },
        {
            "id": 10,
            "name": "测试活动1",
            "intro": "<p>测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1<br></p>",
            "photoPath": "http://v2.xingdt.com:8020/static/2016/03/05/15/54a2ed07-bd4f-47c4-b4f0-89a1599981d1_activity_list_01.jpg",
            "startTime": "2016-03-04 16:00:00",
            "endTime": "2016-03-30 16:00:00",
            "couponId": 16,
            "state": 2,
            "gmtCreate": "2016-03-05 07:21:28",
            "gmtModified": "2016-03-05 07:21:28",
            "city": "深圳市",
            "sourceType": null,
            "contentPath": "http://v2.xingdt.com:8020/XingdtEmbedPage/page/activity/registerNow.html",
            "couponName": "元宵优惠",
            "shopName": null
        }
    ],
    "nowpage": 1
};