// pages/xiehui/xiehui.js
var app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    visible:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    index:5,
    group:["企业","高校研究院","青少年","个人","其他","未选择"],
    menus1: [
      {
        "name": "协会简介",
        "icon": "newsfill",
        "func": "infoFunc2"
      },
      {
        "name": "协会章程",
        "icon": "newshotfill",
        "func": "infoFunc3"
      },
      {
        "name": "申请专利",
        "icon": "tagfill",
        "func": "infoFunc4"
      }],
    news: [
      {
        "title": "优秀参展商系列报道——中国宝武集团钢铁有限公司",
        "content": ""
      },
      {
        "title": "中国发明协会与亚太技术转移中心举办“技术促进持续发展磋商会”",
        "content": ""
      },
    ],
    actions: [
      {
        name: '企业'
      },
      {
        name: '高校',
      },
      {
        name: '个人',
      },
      {
        name:'其他'
      }
    ],

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
  infoFunc2: function(){
    wx.navigateTo({
      url: '../intro/intro',
    })
  },
  infoFunc3: function () {
    wx.navigateTo({
      url: '../rule/rule',
    })
  },
  infoFunc4: function () {
    wx.navigateTo({
      url: '../apply/apply',
    })
  },
  handleClick({detail}){
    const groupIndex = detail.index;
    this.setData({
      index:groupIndex
    })
    // 分组
    wx.request({
      url: 'https://www.fracturesr.xyz/',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      method: 'POST',
      data: {
        group: groupIndex
      },
      success(res) {
        wx.setStorage({
          key: 'Group',
          data: 'groupIndex',
        })
      }
    })
  },
  getUserInfo: function (e) {
    var self = this
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    var openId = '';
    wx.getStorage({
      key: 'UserInfor',
      success: function (res) {
        openId = res.data.OpenId
        console.log(openId)
      },
    })
    wx.request({
      url: 'https://www.fracturesr.xyz/',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      method: 'POST',
      data: {
        openId: openId
      },
      success(res) {
        wx.setStorage({
          key: 'Information',
          data: res.data,
        })
        console.log("在授权后取得用户信息成功")
        if(res.data.HasGroup!=1){// 服务器内没用用户的分组
          self.setData({
            visible:true
          })
        }
      },
      fail() {
        console.log("在授权后取得用户信息失败")
      }
    })
  }
})