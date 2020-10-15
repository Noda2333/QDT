// pages/my/myMsg/myMsg.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList: [{
      user: "星宇",
      title:"今天下雨了",
      comment:"我今天倒是玩了一下午游戏"
    },
    {
      user: "星宇",
      title: "今天下雨了",
      comment: "你今晚打算几点睡？"
    },
    {
      user: "张雨",
      title: "今天下雨了",
      comment: "我下午只睡到了2点半哈哈哈"
    }],
  },
  getMsgList() {
    let that = this
    wx.request({
      url: "http://39.105.191.130:8000/getsdxx?id=" + app.globalData.dynamicId,
      success(res) {
          that.setData({
            msgList: res.data
          })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMsgList()
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