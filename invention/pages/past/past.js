// pages/past/past.js
Page({

  /**
   * Page initial data
   */
  data: {

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

  toExhibition1:function(){
    wx.navigateTo({
      url: 'exhibitions/tailand/tailand',
    })
  },
  toExhibition2: function () {
    wx.navigateTo({
      url: 'exhibitions/shanghai/shanghai',
    })
  },
  toExhibition3: function () {
    wx.navigateTo({
      url: 'exhibitions/american/american1',
    })
  },
  toExhibition4: function () {
    wx.navigateTo({
      url: 'exhibitions/american/american2',
    })
  },
  toExhibition5: function () {
    wx.navigateTo({
      url: 'exhibitions/three/three',
    })
  },
  toExhibition6: function () {
    wx.navigateTo({
      url: 'exhibitions/american/american3',
    })
  },
  toExhibition7: function () {
    wx.navigateTo({
      url: 'exhibitions/tuerqi/tuerqi',
    })
  },
})