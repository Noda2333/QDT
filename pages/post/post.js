//index.js
//获取应用实例
var app = getApp()
var imgArr = []; //这个数组用来临时存储图片数据
Page({
  data: {
    userInfo: {},
    userStatus: {},
    content: '',
    topic: '',
    latitude: '',
    chooseImageUrl: [], //绑定到页面的数据
    chooseImagehid:false,
    uploadimgindex:0,//当前上传第几张
    uploadimgnameArr: [] //上传图片文件名称
  },
  onLoad: function(e) {
    var that = this
    //调用应用实例的方法获取全局数据
    that.setData({
      userInfo: app.globalData.userInfo
    })


    console.log(imgArr);
    imgArr = [];
  },
  topicInput: function(e){
    this.setData({
      topic: e.detail.value
    })
  },
  formSubmit: function (e) {//这里触发图片上传的方法
    console.log(e)
    var tempc = e.detail.value.content;
    
    var that = this
    
    // that.data.uploadimgnameArr = {};
    wx.showLoading({
      title: '提交中...',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    console.log(that.data.topic)
    console.log(e.detail.value.content)
    console.log(app.globalData.dynamicId)
    wx.request({
      url: 'http://39.105.191.130:8000/adddt',
      data: {
        //userId: that.data.appid,
        User_ID: app.globalData.dynamicId,
        Activity_topic: that.data.topic,
        Activity_content: e.detail.value.content
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
          else{
          wx.showToast({
            title: '提交成功',
          })
          that.setData({
            topic: null,
            content: null,
          })
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
        },
      fail: function(res) {
        wx.showToast({
          title: '提交失败',
        })
      }
    })
  },

  // 清除
  formReset: function() {
    console.log('form发生了reset事件')
  },
  // 输入内容
  listenercontent: function (e) {
    var tempc = e.detail.value;

    if (tempc.length > 10){
      tempc = tempc.substring(0, 9)
    }
    console.log(tempc)
    that.setData({
      content: tempc
    })
  },



  // 结束
})