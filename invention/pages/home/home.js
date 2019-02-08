Page ({
  data: {
    menus:[
      {
        "name":"文件通知",
        "url":"../../static/image/file.png",
        "func":"infoFunc"
      },
      {
        "name": "协会简介",
        "url": "../../static/image/intro.png",
        "func": "aFunc"
      },
      {
        "name": "协会章程",
        "url": "../../static/image/rule.png",
        "func": "aFunc"
      },
      {
        "name": "申请入会",
        "url": "../../static/image/apply.png",
        "func": "aFunc"
      },
      {
        "name": "年会介绍",
        "url": "../../static/image/annual.png",
        "func": "aFunc"
      },
      {
        "name": "帮助信息",
        "url": "../../static/image/help.png",
        "func": "aFunc"
      },
      {
        "name": "报名通道",
        "url": "../../static/image/sign.png",
        "func": "aFunc"
      },
      {
        "name": "往届展会",
        "url": "../../static/image/past.png",
        "func": "aFunc"
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
  infoFunc: function() {
    wx.navigateTo({
      url: '../info/info',
    })
  },
  newFunc:function(){
    console.log("Success SR")
  }
})