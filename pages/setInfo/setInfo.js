// pages/setInfo/setInfo.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sign:null,
  },
  formSubmit: function (e){
    wx.showLoading({
      title: '提交中...',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    console.log(e)
    wx.request({
      url: 'http://39.105.191.130:8000/makegxqm',
      data: {
        //userId: that.data.appid,
        id: app.globalData.dynamicId,
        gxqm: e.detail.value.content,
      },
      //POST请求要添加下面的header设置
      method: 'POST',
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success: function(res) {
          console.log(res)
          if(res.data == 233){
            wx.showToast({
              title: '你已被管理员禁言',
            })
          }
          else
          wx.showToast({
            title: '提交成功',
          })
        },
      fail: function(res) {
        wx.showToast({
          title: '提交失败',
        })
      }
    })

    wx.showToast({
      title: '提交成功',
    })
    setTimeout(function () {
      wx.navigateBack({})
    }, 1000) //延迟时间 这里是1秒
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: "http://39.105.191.130:8000/getgxqm?id="+app.globalData.dynamicId,
      success(res) {
        console.log(res)
        if (res) {
          that.setData({
            sign:res.data[0].fields.Per_signature
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})