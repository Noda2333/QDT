// components/h.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false
  },
  
  methods: {
    btnClick: function () {
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }
})
