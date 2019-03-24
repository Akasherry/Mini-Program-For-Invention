// pages/past/exhibitions/three/three.js
Page({

  data: {
    cardCur: 0,
    percent: 0,
    isActive: false,
    see: false,
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
  }
})