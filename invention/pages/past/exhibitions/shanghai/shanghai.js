// pages/past/exhibitions/shanghai/shanghai.js
Page({

  data: {
    percent: 0,
    isActive: false,
    see: false,
  },
  onLoad() {

  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },

  download: function (e) {
    var that = this
    this.setData({
      isDown: true,
      percent: 100,
      see: true
    })
    var url = e.currentTarget.dataset.url
    wx.downloadFile({
      url: url,
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
        that.setData({
          see: false,
          percent: 0,
          isActive: false
        })
        wx.openDocument({
          filePath: res.tempFilePath,
          success: function (res) {
          }
        })
      }
    })
  },
  mutiDownload: function () {
    
  }
})