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
    let i
    let canSend = true
    Object.keys(e.detail.value).forEach(function (key) {
      if (e.detail.value[key] == null || e.detail.value[key] == 0) {
        canSend = false
      }
    })
    if (canSend == true) {
      wx.request({
        url: 'https://www.fracturesr.xyz/wxServer/send2',
        header: {
          'content-type': "application/x-www-form-urlencoded"
        },
        method: 'POST',
        data: {
          Applicant: e.detail.value.contact,
          PhoneNumber: e.detail.value.phone,
          Email: e.detail.value.mail,
          ProjectName: e.detail.value.pn,
          ProjectDetail: e.detail.value.pd
        },
        success: function (res) {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 1000,
            mask: true
          })
        },
        fail() {
          wx.showToast({
            title: '提交失败',
            icon: 'loading',
            duration: 1000,
            mask: true
          })
        }
      })
      if (self.data.tempFile != null) {
        wx.uploadFile({
          url: 'https://www.fracturesr.xyz/wxServer/upload',
          filePath: this.data.tempFile,
          name: 'image',
          formData: {
            PhoneNumber: e.detail.value.phone
          },
          success(res) {
            self.setData({
              hasFile: false,
						  tempFile: null
            })
          }
        })
      }
    } else {
      wx.showToast({
        title: '请填写完整信息！',
        duration: 1000,
        icon: "none"
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