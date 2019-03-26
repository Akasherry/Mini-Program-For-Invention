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
    groupName:'',
    group0: ['企业', '高校研究院', '青少年', '个人', '其他', '未分组'],
    group:["填写信息"],
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
        "title": "优秀参展商风采之长沙大红陶瓷发展有限责任公司",
        "image": "https://www.fracturesr.xyz/download/%E9%80%9A%E7%9F%A5/changshared.jpg",
        "content": "",
        "tag1":"优秀参展商",
        "tag2":"系列报道",
        "flag":0
      },
      {
        "title": "军民融合助力通航产业发展——陕西西北通用航空协会理事长张炎一行访问中国发明协会",
        "image": "https://www.fracturesr.xyz/download/%E9%80%9A%E7%9F%A5/shanxiair.jpg",
        "content": "",
        "tag1":"发明协会",
        "tag2":"军民融合",
        "flag":1
      },
    ],
    actions: [
     
      {
        name:'填写信息'
      }
    ],

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    var self = this
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      wx.getStorage({
        key: 'UserInfor',
        success: function(res) {
          app.globalData.groupIndex=res.data.DivideIndex
          console.log(res.data.DivideIndex)
          self.setData({
            groupName: self.data.group0[app.globalData.groupIndex-1]
          })
        },
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
      wx.getUserInfo({// 你有没有设置传回的data里有flag啊 golang的话成员首字母不能小写
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
    this.setData({
      visible:false,
      groupName:this.data.group0[app.globalData.groupIndex-1]
    })
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
    wx.navigateTo({
      url: '../information/information',
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

        wx.request({
          url: 'https://www.fracturesr.xyz/wxServer/getGroup',
          header: {
            'content-type': "application/x-www-form-urlencoded"
          },
          method: 'POST',
          data: {
            openId: openId
          },
          success(res) {
            console.log(res.data)
            wx.setStorage({
              key: 'Information',
              data: res.data,
            })
            console.log("在授权后取得用户信息成功")
            if (res.data.HasGroup != '1') {// 服务器内没有用户的分组
              self.setData({
                visible: true
              })
              // console.log(self.data.visible)
            }
            // self.setData ({
            //   groupName: self.data.group0[parseInt(res.data.DivideIndex)]
            // }),
            // app.globalData.groupIndex=self.data.group0[parseInt(res.data.DivideIndex)]
          },
          fail() {
            console.log("在授权后取得用户信息失败")
          }
        })

        console.log("在授权后取得用户信息成功")
        if(res.data.HasGroup!=1){// 服务器内没用用户的分组
          self.setData({
            visible:true
          })
        }
      },
    })
  },
  news: function(e) {
    if(e.currentTarget.dataset.flag == 0) {
      wx.navigateTo({
        url: '../out/news0',
      })
    } else if (e.currentTarget.dataset.flag == 1) {
      wx.navigateTo({
        url: '../out/news1',
      })
    }
  }
})