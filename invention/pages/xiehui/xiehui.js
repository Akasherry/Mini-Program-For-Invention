// pages/xiehui/xiehui.js
Page({

  /**
   * Page initial data
   */
  data: {
    menus1: [
      {
        "name": "协会简介",
        "icon": "newsfill",
        "func": "infoFunc2"
      },
      {
        "name": "协会章程",
        "icon": "newshotfill",
        "func": "infoFunc3"
      },
      {
        "name": "申请专利",
        "icon": "tagfill",
        "func": "infoFunc4"
      }],
    news: [
      {
        "title": "优秀参展商系列报道——中国宝武集团钢铁有限公司",
        "content": ""
      },
      {
        "title": "中国发明协会与亚太技术转移中心举办“技术促进持续发展磋商会”",
        "content": ""
      },
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },
  infoFunc2: function(){
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
  }
})