//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    wording:' this girl'
  },
  onClick: function() {
    this.setData({
      wording:',not a boy'
    })
  }
})
