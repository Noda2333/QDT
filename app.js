//app.js
App({
  onLaunch: function () {
    wx.showLoading({
      title: '请稍候...',
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        this.globalData.dynamicId = res.code;
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.hideLoading()
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              wx.request({
                url: 'http://39.105.191.130:8000/login?id=' + this.globalData.dynamicId + "&nicn=" + res.userInfo.nickName,
                success: res => {
                  console.log(res)
                  this.globalData.dynamicId = res.data
                }
              })
              wx.request({
                url: 'http://39.105.191.130:8000/ifad?id=' + this.globalData.dynamicId,
                success: res => {
                  this.globalData.admin = res.data
                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }

      }
    })
  },
  globalData: {
    userInfo: null,
    dynamicId: null,
    admin: false,
  }
})