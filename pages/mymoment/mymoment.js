var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    momentList: [{
      User_ID: "星宇",
      Num_activity_like: "100",
      Num_activity_replies: "13",
      Activity_content: "今天，又是充满希望的一天！《英雄联盟》(简称LOL)是由美国拳头游戏(Riot Games)开发、中国大陆地区腾讯游戏代理运营的英雄对战MOBA竞技网游。",
      Activity_topic: "我带你们打英雄联盟"
    },
      {
        User_ID: "stbyu",
        Num_activity_like: "89",
        Num_activity_replies: "5",
        Activity_content: "This novel is a legend of a struggler and explorer.  The army is ours.",
        Activity_topic: "Let's learn English"
      },
      {
        User_ID: "星宇",
        Num_activity_like: "37",
        Num_activity_replies: "1",
        Activity_content: "有谁想看小丑吗，我们一起去看呀233333333",
        Activity_topic: "小丑票房破10亿"
      },
      {
        User_ID: "张雨",
        Num_activity_like: "151",
        Num_activity_replies: "23",
        Activity_content: "桌上摆满了美味的食物，有圆圆的汉堡包、香脆的薯条、冒着泡泡的可乐……大家共同享用没事，觉得格外好吃。吃完了饭，我们开始玩一个叫做“打皮布卡”的游戏。皮布卡是一个装满糖果和小玩具的小马玩偶，我们轮流打它，到国敏一时，皮布卡完全裂开了，里面的糖果和玩具“哗”的一声，像下雨一样落了下来。我们赶紧冲过去，你争我抢地拾起地上地玩具，大家都很开心",
        Activity_topic: "生日派对"
      },
      {
        User_ID: "wingman",
        Num_activity_like: "23",
        Num_activity_replies: "3",
        Activity_content: "孩子咳嗽老不好，多半是肺热，快用葵花牌小儿肺热咳喘口服液，清肺热，治疗反复咳嗽",
        Activity_topic: "小葵花妈妈课堂开课啦"
      },
      ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getmomentList()
  },
  onShow: function(options){
    this.getmomentList()
  },
  getmomentList() {
    let that = this
    wx.request({
      url: "http://39.105.191.130:8000/getsydt?id="+app.globalData.dynamicId,
      success(res) {
        if (res) {
          that.setData({
            momentList: res.data
          })
        }
        console.log(res.data)
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