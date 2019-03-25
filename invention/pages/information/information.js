// pages/information/information.js
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    hasJob:false,
    hasSchool:false,
    groupNumber:1,
    value1:"",
    value2:"",
    value3:"",
    group: [{
      id: 1,
      name: '企业',
    }, {
      id: 2,
      name: '高校研究院'
    }, {
      id: 3,
      name: '青少年'
    }, {
      id: 4,
      name: '个人',
    },
      {
        id:5,
        name: '其他',
      }
    ],
    current: '企业',
    checked: false,

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
  handleChange({ detail = {} }) {
    this.setData({
      hasJob: false,
      hasSchool: false,
    })
    let keyNum = 1;
    switch(detail.value){
      case '企业':
        keyNum=1;
        break;
      case '高校研究院':
        keyNum = 2;
        break;
      case '青少年':
        keyNum=3;
        break;
      case '个人':
        keyNum=4;
        break;
      case '其他':
        keyNum=5;
        break;
        
    }
    this.setData({
      current: detail.value,
      groupNumber:keyNum
    });
    if(this.data.groupNumber==1){
      this.setData({
        hasJob:true
      })
    }else if(this.data.groupNumber==2||this.data.groupNumber==3){
      this.setData({
        hasSchool:true
      })
    }
  },
  handleClick:function(){
    var that = this;
    const groupIndex = that.data.groupNumber;
    var openId;
    wx.getStorage({
      key: 'UserInfor',
      success: function (res) {
        openId = res.data.OpenId
        // 分组
        wx.request({
          url: 'https://www.fracturesr.xyz/wxServer/setGroup',
          header: {
            'content-type': "application/x-www-form-urlencoded"
          },
          method: 'POST',
          data: {
            group: groupIndex,
            openId: openId,
            name:that.data.value1,
            phone:that.data.value2,
            groupName:that.data.value3
          },
          success(res) {
            wx.setStorage({
              key: 'Group',
              data: 'groupIndex',
            })
            app.globalData.groupIndex = groupIndex-1
            console.log(app.globalData.groupIndex)
            wx.showToast({
              title: '信息成功提交',
            })
            wx.navigateBack({
              
            })
          }
        })
      },
    })
  }
})