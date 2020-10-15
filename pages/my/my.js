//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    admin: null,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../my/my'
    })
  },
  myMoment: function(){
    wx.navigateTo({
      url: '/pages/mymoment/mymoment'
    })
  },
  settingInfo: function(){
    wx.navigateTo({
      url: '/pages/setInfo/setInfo',
    })
  },
  userList: function(){
    wx.navigateTo({
      url: './userList/userList',
    })
  },
  myMessiges: function(){
    wx.navigateTo({
      url: './myMsg/myMsg',
    })
  },
  myFollows: function () {
    wx.navigateTo({
      url: './myFollow/myFollow',
    })
  },
  myCollections: function () {
    wx.navigateTo({
      url: './myCollection/myCollection',
    })
  },
  onShow: function(){
    wx.request({
      url: 'http://39.105.191.130:8000/ifad?id=' + app.globalData.dynamicId,
      success: res => {
        app.globalData.admin = res.data
      }
    })
    this.setData({
      admin : app.globalData.admin
    });
  },
  onLoad: function () {
    this.setData({
      admin : app.globalData.admin
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
