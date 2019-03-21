// pages/past/exhibitions/american/american3.js
Page({

  data: {
    cardCur: 0,

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
  download: function () {
    wx.downloadFile({
      url: 'https://www.fracturesr.xyz/download/2017%E7%BE%8E%E5%9B%BD/2016%E7%BE%8E%E5%9B%BD%E5%8C%B9%E5%85%B9%E5%A0%A1%E5%9B%BD%E9%99%85%E5%8F%91%E6%98%8E%E5%B1%95%E9%80%9A%E7%9F%A5.doc', // 仅为示例，并非真实的资源
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