// pages/past/exhibitions/tuerqi/tuerqi.js
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
  download1: function () {
    this.setData({
      isDown: true,
      percent: 100,
      see: true
    })
    wx.downloadFile({
      url: 'https://www.fracturesr.xyz/download/2016%E5%9C%9F%E8%80%B3%E5%85%B6/%E9%82%AE%E4%BB%B6%E4%B8%93%E7%94%A8/%E5%9C%9F%E8%80%B3%E5%85%B6%E4%BC%8A%E6%96%AF%E5%9D%A6%E5%B8%83%E5%B0%94%E5%9B%BD%E9%99%85%E5%B1%95%E9%80%9A%E7%9F%A5.doc', // 仅为示例，并非真实的资源
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
    this.setData({
      isDown: true,
      percent: 100,
      see: true
    })
    wx.downloadFile({
      url: "https://www.fracturesr.xyz/download/2016%E5%9C%9F%E8%80%B3%E5%85%B6/Re_%E5%9C%9F%E8%80%B3%E5%85%B6%E5%B1%95%E9%80%9A%E7%9F%A5/2015.12.24%E4%BC%8A%E6%96%AF%E5%9D%A6%E5%B8%83%E5%B0%94%E5%9B%BD%E9%99%85%E5%B1%95%E9%80%9A%E7%9F%A5.doc",
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
    this.setData({
      isDown: true,
      percent: 100,
      see: true
    })
    wx.downloadFile({
      url: "https://www.fracturesr.xyz/download/2016%E5%9C%9F%E8%80%B3%E5%85%B6/Re_%E5%9C%9F%E8%80%B3%E5%85%B6%E5%B1%95%E9%80%9A%E7%9F%A5/%E9%99%84%E4%BB%B6%E4%BA%8C%20%20Entry%20Form%20of%20Inventions%20%E9%A1%B9%E7%9B%AE%E7%94%B3%E6%8A%A5%E8%A1%A8%20ISIF%202016.doc",
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
        this.setData({
          see: false,
          percent: 0,
          isActive: false
        })
      }
    })
  }
})