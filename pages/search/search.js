// pages/search/search.js
Page({
  // 页面的初始数据
  data: {
  },
  jumpSR: function(e){
    let that = this
    console.log(e)
    
    wx.navigateTo({
      url: '/pages/searchResult/searchResult?word='+e.detail.value,
    })

  }
})