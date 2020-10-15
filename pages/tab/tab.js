// pages/tab/tab.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tabName: "星宇",
      followed: false,
      momentList: null,
  },
  follow(){
    let that = this;
    var followed = that.data.followed;
    wx.request({
      url: 'http://39.105.191.130:8000/makegz?id='+app.globalData.dynamicId+"&ht="+this.data.tabName,
      success:res=>{
        that.setData({
          followed : !followed 
        })
      }
    })
  },
  followList(id){
    let that = this;
    wx.request({
      url: 'http://39.105.191.130:8000/gethtddt?ht='+id,
      success: res=> {
        that.setData({
          momentList : res.data
        })
      }
    })
    wx.request({
      url: 'http://39.105.191.130:8000/ifgz?id='+app.globalData.dynamicId+'&ht='+id,
      success: res=>{
        console.log(res)
        this.setData({
          followed:res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.followList(options.id)
    this.setData({
      tabName: options.id
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