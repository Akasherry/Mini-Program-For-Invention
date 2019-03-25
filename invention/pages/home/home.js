Page ({
  data: {
    cardCur: 0,
    show:0,
    tempFile:null,
    hasFile:false,
    text: [
      {
        title: "参展对象",
        content: [
          { text0: "各企事业单位、企事业单位职务发明人、发明人、高校在校大学生发明人、中小学在校生发明人。" }
        ]
      },
      {
        title: "参展项目要求",
        content: [
          { text0: "（一）各领域的新发明、新技术、新产品均可参展，尤其是与人民生活密切相关、适用性较强、构思巧妙、设计精美，既可以解决实际问题又节能环保的新技术、新产品。参展展品形式可以是发明实物、技术方案。" },
          { text0: "（二）参展项目需要提交专利证书或受理通知书。已参加过我团举办的发明展览会的项目，仍可以参展。凡有知识产权纠纷而相关行政主管部门或执法、司法部门尚未做出结论的项目，不得参展。（如需申请专利，可联系组委会申请，费用另计）" },
          { text0: "（三）项目提交截止时间为2019年2月25日，提交项目请填写附件中的项目申报表。" },
          { text0: "自助午餐 RMB240元 / 人 / 天" },
          { text0: "8月30日欢迎晚宴 RMB600元/人" }
        ]
      },
      {
        title: "展览方式",
        content: [
          { text0: "参展项目一般应有实物展品展示和展板展示。" },
          { text0: "（一）展板展示。每块展板要求宽0.8米、高1.2米，展板内容可以是图文并茂的形式，用英文对项目做简明扼要的介绍。" },
          { text0: "（二）展品展示。展品可以是实物（外型长度不超过1.5米，高度不超过1米，特装除外）、样品、模型，同时配以英文展板及声像资料，以直观、形象地反映参展项目的技术特征和应用前景。" },
          { text0: "（三）展厅内每个标准展位为4平方米（2m×2m），每个展位的参展项目不超过2项。" }
        ]
      },
      {
        title: "报名办法",
        content: [{ text0: "请将附件中的《个人资料表》电子版填写完整，于2019年2月25日之前将报名表、《作品申报表》、身份证扫描件、户口本扫扫描件、因私护照扫描件、发送至组委会官方邮箱6164412@163.com。" }]
      },
      {
        title: "参展费用",
        content: [{
          text0: "（一）展位费：联合展位15000元人民币/项目，如只送项目参展： 20000元人民币/项目，如需翻译：每个项目收翻译费1000元。"
        },
        { text0: "（二）团费：团费为48000元人民币/人，费用包含：北京到莫斯科往返的国际机票、税金、俄罗斯当地8天食宿等费用。费用不包含签证费，特殊用电用水等费用。不包括发明人从所在地到使领馆面签的费用、不包括从发明人所在地到北京集合的费用。" }
        ]
      },
      {
        title: "汇款账户",
        content: [
          { text0: "开户行：民生银行北京万柳支行" },
          { text0: "户  名：北京发明在线科技有限公司" },
          { text0: "账  号：692859501" }
        ]
      }
    ],
    color: ['white', 'white', 'white', 'white'],
    TabCur: 0,
    scrollLeft: 0,
    infos: [
      {
        "name": "第22届莫斯科“阿基米德”国际发明展邀请函",
        "url": "https://www.fracturesr.xyz/download/%E9%80%9A%E7%9F%A5/%E7%AC%AC22%E5%B1%8A%E4%BF%84%E7%BD%97%E6%96%AF%E2%80%98%E9%98%BF%E5%9F%BA%E7%B1%B3%E5%BE%B7%E2%80%99%E5%9B%BD%E9%99%85%E5%B1%95%E8%A7%88%E4%BC%9A.docx"
      }
    ],
    loadingHidden: true,
    content: [
      {
        text:"2019年第22届莫斯科\“阿基米德\”国际发明展将于2019年3月26日到29日在俄罗斯首都莫斯科索科尔尼基会展中心（EcoCenter“Sokolniki”）举行。"
      },
      {
        text:"莫斯科“阿基米德”国际发明展由莫斯科市科工商政策部主办，俄罗斯联邦总统政府、莫斯科市政府和世界知识产权组织(WIPO)和发明者协会国际联合会（IFIA）作为支持单位的国际级发明博览会。在2018年举行的“阿基米德”国际发明展有来自50个国家和地区以及来自俄罗斯联邦各地区的代表团参展，共展出几千件发明项目。"
      },
      {
        text:"受发明者协会国际联合会委托，并响应国家\“一带一路\”号召，在国际舞台上展示中国发明成果，将高水平的发明成果引导中国企业走出去，我们将组织中国代表团参加莫斯科\“阿基米德\”国际发明展，诚挚邀请各有关单位及广大发明家、企业家及青少年发明人积极参展。"
      }
    ]
  },
  
  aFunc: function() {
    console.log("Success")
  },

  newFunc:function(e){
    console.log(e.currentTarget.dataset.cur)
    if(e.currentTarget.dataset.cur == 0) {
      wx.navigateTo({
        url: '../out/swiper1',
      })
    } else if (e.currentTarget.dataset.cur == 1) {
      wx.navigateTo({
        url: '../out/swiper2',
      })
    }
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
 
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
      show: e.currentTarget.dataset.id+1,
    })
  },

  load: function (e) {
    this.setData({
      loadingHidden: false
    })
    var that = this;
    console.log(e.currentTarget.dataset.route)
    wx.downloadFile({
      url: e.currentTarget.dataset.route,
      success: function (res) {
        wx.openDocument({
          filePath: res.tempFilePath,
          success: function (res) {
            that.setData({
              loadingHidden: true,
            })
          }
        })
      }
    })
  },
  formSubmit: function (e) {
    var self = this
    if (self.data.tempFile != null) {
      wx.uploadFile({
        url: 'https://www.fracturesr.xyz/wxServer/upload', // 仅为示例，非真实的接口地址
        filePath: this.data.tempFile,
        name: 'file',
        formData: {
          user: 'test'
        },
        success(res) {
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
                icon: 'loading',
                duration: 1000,
                mask: true
              })
            }
          })
        }
      })
    } else {
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
            icon: 'loading',
            duration: 1000,
            mask: true
          })
        }
      })
    }
  },
  upload: function(){
    var self = this
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        self.setData({
          tempFile: tempFilePaths[0],
          hasFile:true
        })
      }
    })
  }
})