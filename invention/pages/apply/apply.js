// pages/apply/apply.js
Page({

  /**
   * Page initial data
   */
  data: {
    tempFile: null,
    hasFile: false,
    allValue:{}
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
  formSubmit: function (e) {
    var self = this
    if(self.data.tempFile!=null){
      wx.uploadFile({
        url: 'https://www.fracturesr.xyz', // 仅为示例，非真实的接口地址
        filePath: this.data.tempFile,
        name: 'file',
        formData: {
          user: 'test'
        },
        success(res) {
          wx.request({
            url: 'https://www.fracturesr.xyz',
            header: {
              'content-type': "application/x-www-form-urlencoded"
            },
            method: 'POST',
            data: {
              Applicant: e.detail.value[0],
              PhoneNumber: e.detail.value[1],
              Email: e.detail.value[2],
              ProjectName: e.detail.value[3],
              ProjectDetail: e.detail.value[4]
            },
            success: function (res) {
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
            },
            fail() {
              wx.showToast({
                title: '提交失败',
                icon: 'fail',
                duration: 1000,
                mask: true
              })
            }
          })
        }
      })
    }else{
      wx.showToast({
        title: '请选择文件！',
        icon: 'fail',
        duration: 1000,
        mask: true
      })
    }
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