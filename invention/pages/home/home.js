Page ({
  data: {
    menus:[
      {
        "name":"文件通知",
        "url":"../../static/image/file.png",
        "func":"infoFunc1"
      },
      {
        "name": "协会简介",
        "url": "../../static/image/intro.png",
        "func": "infoFunc2"
      },
      {
        "name": "协会章程",
        "url": "../../static/image/rule.png",
        "func": "infoFunc3"
      },
      {
        "name": "申请入会",
        "url": "../../static/image/apply.png",
        "func": "infoFunc4"
      },
      {
        "name": "年会介绍",
        "url": "../../static/image/annual.png",
        "func": "infoFunc5"
      },
      {
        "name": "帮助信息",
        "url": "../../static/image/help.png",
        "func": "infoFunc6"
      },
      {
        "name": "报名通道",
        "url": "../../static/image/sign.png",
        "func": "infoFunc7"
      },
      {
        "name": "往届展会",
        "url": "../../static/image/past.png",
        "func": "infoFunc8"
      }
    ],
    news:[
      {
        "title": "优秀参展商系列报道——中国宝武集团钢铁有限公司",
        "content": ""
      },
      {
        "title": "喜讯！ 2018年首尔国际发明博览会中国发明协会代表团选送项目全部荣膺金奖",
        "content": ""
      },
    ]
  },
  aFunc: function() {
    console.log("Success")
  },
  infoFunc1: function() {
    wx.navigateTo({
      url: '../info/info',
    })
  },
  infoFunc2: function () {
    wx.navigateTo({
      url: '../intro/intro',
    })
  },
  infoFunc3: function () {
    wx.navigateTo({
      url: '../rule/rule',
    })
  },
  infoFunc4: function () {
    wx.navigateTo({
      url: '../apply/apply',
    })
  },
  infoFunc5: function () {
    wx.navigateTo({
      url: '../annual/annual',
    })
  },
  infoFunc6: function () {
    wx.navigateTo({
      url: '../help/help',
    })
  },
  infoFunc7: function () {
    wx.navigateTo({
      url: '../path/path',
    })
  },
  infoFunc8: function () {
    wx.navigateTo({
      url: '../past/past',
    })
  },
  newFunc:function(){
    console.log("Success SR")
  }
})