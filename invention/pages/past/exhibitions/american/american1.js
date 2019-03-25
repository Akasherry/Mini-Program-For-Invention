// pages/past/exhibitions/american/american1.js
Page({

  /**
   * Page initial data
   */
  data: {
    percent: 0,
    isActive: false,
    see: false,
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
    var that = this
    this.setData({
      isDown: true,
      percent: 100,
      see: true
    })
    wx.downloadFile({
      url: "https://www.fracturesr.xyz/download/2018%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7/%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82.pdf",
      success(res) {
        that.setData({
          see: false,
          percent: 0,
          isActive: false
        })
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
        wx.openDocument({
          filePath: res.tempFilePath,
          success: function (res) {
            console.log("openDoc")
          }
        })
      }
    })
  }
})