// pages/apply/apply.js
Page({

  /**
   * Page initial data
   */
  data: {
    tempFile: null,
    hasFile: false,
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
  handleSubmit: function () {
    var self = this
    wx.uploadFile({
      url: 'https://www.fracturesr.xyz/wxServer/upload', // 仅为示例，非真实的接口地址
      filePath: this.data.tempFile,
      name: 'image',
      formData: {
        PhoneNumber: '77775623888'
      },
      success(res) {
        const data = res.data
        console.log('submit')
        wx.showToast({
          title: '提交成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
        self.setData({
          hasFile: false,
          tempFile: null
        })
      }
    })
  },
  upload: function () {
    var self = this
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        self.setData({
          tempFile: tempFilePaths[0],
          hasFile: true
        })
      }
    })
  }
})