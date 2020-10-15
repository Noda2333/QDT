// pages/my/userList/userList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: null,
  },
  ban(e){
    console.log(e)
    wx.request({
      url: 'http://39.105.191.130:8000/makejy?id='+e.currentTarget.id,
      success: res=>{
        console.log(res)
        if(res.data==1){
          wx.showToast({
            title: '已成功禁言',
          })
        }
        else if(res.data==0){
          wx.showToast({
            title: '已解除禁言',
          })
        }
      }
    })
  },
  getUserList(){
    wx.request({
      url: 'http://39.105.191.130:8000/getuserlist',
      success: res=>{
        this.setData({
          userList:res.data
        })
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserList()
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