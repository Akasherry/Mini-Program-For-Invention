Page({
  data: {
    infos: [
      {
        "name":"参展项目回执",
        "url":"https://tcb-api.tencentcloudapi.com"
      },
      {
        "name":"出国参展人员情况表",
        "url": "https://tcb-api.tencentcloudapi.com"
      }
    ],
    loadingHidden: true
  },
  load: function(e) {
    this.setData({
      loadingHidden:false
    })
    var that = this;
    console.log(e.currentTarget.dataset.route)
    wx.downloadFile({
      url: e.currentTarget.dataset.route,
      success: function(res) {
        wx.openDocument({
          filePath: res.tempFilePath,
          success: function(res) {
            that.setData({
              loadingHidden:true
            })
          }
        })
      }
    })
  }
})