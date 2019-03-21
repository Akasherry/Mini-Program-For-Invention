// pages/past/exhibitions/shanghai/shanghai.js
Page({

  /**
   * Page initial data
   */
  data: {
    url1: "https://www.fracturesr.xyz/download/2018上海/2018第二届中国（上海）第五届国际发明创新展览会的通知.doc",
    url2: "https://www.fracturesr.xyz/download/2018上海/2018第二届中国（上海）国际发明创新展览会的通知.pdf",
    url3: "https://www.fracturesr.xyz/download/2018上海/授权委任书.jpg"
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

  download1: function() {
    wx.downloadFile({
      url: "https://www.fracturesr.xyz/download/2018上海/2018第二届中国（上海）第五届国际发明创新展览会的通知.doc",
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
      }
    })
  },

  download2: function () {
    wx.downloadFile({
      url: "https://www.fracturesr.xyz/download/2018上海/2018第二届中国（上海）国际发明创新展览会的通知.pdf",
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
      }
    })
  },

  download3: function () {
    wx.downloadFile({
      url: "https://www.fracturesr.xyz/download/2018上海/授权委任书.jpg",
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
      }
    })
  }
})