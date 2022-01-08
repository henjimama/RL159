module.exports = {
    "id": "tqyb",
    "name": "天气预报极速版",
    "keys": ["tqyburl","tqyburl2","tqyburl3","tqyburl4","tqyburl5"],
    "author": "@tom",
    "settings": [{
      "id": "tqybSuffix",
      "name": "当前账号",
      "val": "1",
      "type": "number",
      "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
    }, {
      "id": "tqybCount",
      "name": "账号个数",
      "val": "1",
      "type": "number",
      "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
    }, {
      "id": "tqybXH",
      "name": "循环获取ck",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "tqybTXTX",
      "name": "txtx",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "tqybSC",
      "name": "sc",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "tqybnotifyttt",
      "name": "推送控制",
      "val": "1",
      "type": "number",
      "desc": "0关闭，1推送,默认12点以及23点推送"
    }, {
      "id": "tqybnotifyInterval",
      "name": "通知控制",
      "val": "2",
      "type": "number",
      "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
    }, {
      "id": "tqybMinutes",
      "name": "推送-通知 分钟控制",
      "val": "10",
      "type": "number",
      "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
    }],
    "repo": "https://raw.githubusercontent.com/xl2101200/-/main/tqyb.js",
    "icons": ["https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg", "https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg"],
    "script": "https://raw.githubusercontent.com/xl2101200/-/main/tqyb.js",
    "icon": "https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg",
    "favIcon": "mdi-star-outline",
    "favIconColor": "grey",
    "datas": [{
      "key": "tqyburl",
      "val": "http://coin.makingmoney.cn:8088/task/coin?guid=UUID-40FB27FA-2D8D-4EE0-9D23-9512CE17EC8F&ver=1.3.0&systemver=15.0.1&bid=com.swx.weather.app&mt=1&sw=375&sh=812&device=iPhone&idiom=0&chl=AppStore&language=zh-Hans-CN&locale=CN&zone=Asia%2FShanghai&timestamp=1641642444&idfv=0611C5C0-13C1-41E0-81D8-8785B2F92EB9&sign=2449733a226420dafc81db291c8729d3"
    }, {
      "key": "tqyburl2",
      "val": ""
    }, {
      "key": "tqyburl3",
      "val": ""
    }],
    "sessions": [],
    "isLoaded": true
  }
  
