// pages/past/exhibitions/american/american1.js
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

  download: function (url) {
    wx.downloadFile({
      url: url,
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
  mutiDownload: function () {
    var urls = new Array(5)
    urls[0] = "https://www.fracturesr.xyz/download/2018%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7/%E4%B8%AD%E5%8F%91%E5%8D%8F%E5%AD%97%EF%BC%882018%EF%BC%8929%E5%8F%B7%E5%85%B3%E4%BA%8E%E5%8F%82%E5%8A%A0%E9%A6%96%E5%B1%8A%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82%E7%9A%84%E9%80%9A%E7%9F%A5%2817%29/%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82%201%20001.jpg"
    urls[1] = "https://www.fracturesr.xyz/download/2018%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7/%E4%B8%AD%E5%8F%91%E5%8D%8F%E5%AD%97%EF%BC%882018%EF%BC%8929%E5%8F%B7%E5%85%B3%E4%BA%8E%E5%8F%82%E5%8A%A0%E9%A6%96%E5%B1%8A%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82%E7%9A%84%E9%80%9A%E7%9F%A5%2817%29/%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82%202%20001.jpg"
    urls[2] = "https://www.fracturesr.xyz/download/2018%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7/%E4%B8%AD%E5%8F%91%E5%8D%8F%E5%AD%97%EF%BC%882018%EF%BC%8929%E5%8F%B7%E5%85%B3%E4%BA%8E%E5%8F%82%E5%8A%A0%E9%A6%96%E5%B1%8A%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82%E7%9A%84%E9%80%9A%E7%9F%A5%2817%29/%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82%203%20001.jpg"
    urls[3] = "https://www.fracturesr.xyz/download/2018%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7/%E4%B8%AD%E5%8F%91%E5%8D%8F%E5%AD%97%EF%BC%882018%EF%BC%8929%E5%8F%B7%E5%85%B3%E4%BA%8E%E5%8F%82%E5%8A%A0%E9%A6%96%E5%B1%8A%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82%E7%9A%84%E9%80%9A%E7%9F%A5%2817%29/%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82%204%20001.jpg"
    urls[4] = "https://www.fracturesr.xyz/download/2018%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7/%E4%B8%AD%E5%8F%91%E5%8D%8F%E5%AD%97%EF%BC%882018%EF%BC%8929%E5%8F%B7%E5%85%B3%E4%BA%8E%E5%8F%82%E5%8A%A0%E9%A6%96%E5%B1%8A%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82%E7%9A%84%E9%80%9A%E7%9F%A5%2817%29/%E7%BE%8E%E5%9B%BD%E7%A1%85%E8%B0%B7%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E8%8A%82%205%20001.jpg"
    var x
    for (x in urls) {
      this.download(urls[x])
    }
  }
})