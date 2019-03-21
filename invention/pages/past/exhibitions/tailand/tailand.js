// pages/past/exhibitions/tailand/tailand.js
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
  download :function(url){
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
  mutiDownload :function() {
    var urls = new Array(3)
    urls[0] = "https://www.fracturesr.xyz/download/2918泰国/泰国1.jpg"
    urls[1] = "https://www.fracturesr.xyz/download/2918泰国/泰国2.jpg"
    urls[2] = "https://www.fracturesr.xyz/download/2918泰国/泰国3.jpg"
    var x
    for (x in urls) {
      this.download(urls[x])
    }
  }
})