// pages/past/exhibitions/tailand/tailand.js
Page({

  data: {
    cardCur: 0,
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
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  download :function(){
    var that = this
    this.setData({
      isDown: true,
      percent: 100,
      see: true
    })
    wx.downloadFile({
      url: "https://www.fracturesr.xyz/download/2918%E6%B3%B0%E5%9B%BD/%E6%B3%B0%E5%9B%BD.pdf",
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
  }
})