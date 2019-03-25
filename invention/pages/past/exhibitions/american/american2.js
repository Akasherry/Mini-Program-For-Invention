// pages/past/exhibitions/american/american2.js
Page({

  /**
   * Page initial data
   */
  data: {
    loadingHidden: true
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

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  download: function () {
    var that =this
    this.setData({
      loadingHidden: false
    })
    wx.downloadFile({
      url: "https://www.fracturesr.xyz/download/2017%E7%BE%8E%E5%9B%BD/2017%E5%8C%B9%E5%85%B9%E5%A0%A1%E5%9B%BD%E9%99%85%E5%B1%95%E9%80%9A%E7%9F%A5.doc",
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }

        that.setData({
          loadingHidden: true
        })
        wx.openDocument({
          filePath: res.tempFilePath,
          success: function (res) {
          }
        })
      }
    })
  }
})