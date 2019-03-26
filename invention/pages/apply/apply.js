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
        url: 'https://www.fracturesr.xyz/wxServer/upload', // 仅为示例，非真实的接口地址
        filePath: this.data.tempFile,
        name: 'image',
        formData: {
          PhoneNumber: e.detail.value[1]
        },
        success(res) {
          let i;
          let canSend = true;
          for (i = 0; i <= 3; i++) {
            if (e.detail.value[i] == null) {
              canSend = false;
            } else {
              if (e.detail.value[i].length == 0) {
                canSend = false;
              }
            }
          }
          if (canSend == true) {
          wx.request({
            url: 'https://www.fracturesr.xyz/wxServer/send',
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
                icon: 'success',
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
                icon: 'none',
                duration: 1000,
                mask: true
              })
            }
          })
          } else {
            wx.showToast({
              title: '请填写完整信息！',
              duration: 1000,
              icon: "none"
            })
          }
        }
      })
    }else{
      let i;
      let canSend = true;
      for (i = 0; i <= 3; i++) {
        if (e.detail.value[i] == null) {
          canSend = false;
        } else {
          if (e.detail.value[i].length == 0) {
            canSend = false;
          }
        }
      }
      if (canSend == true) {
      wx.request({
        url: 'https://www.fracturesr.xyz/wxServer/send',
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
            icon: 'none',
            duration: 1000,
            mask: true
          })
        }
      })
      } else {
        wx.showToast({
          title: '请填写完整信息！',
          duration: 1000,
          icon: "none"
        })
      }
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