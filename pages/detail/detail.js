const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        momentid:null,
        dzed:null,
        csed:null,
        candel:null,
        //动态详情信息
        momentDetail:{},
        //其他推荐视频
        otherList: [],
        //评论列表
        commentsList: []
    },
    Reply: function(){
        wx.navigateTo({
          url: '/pages/comment/comment?id='+this.data.momentid,
        })
    },
    del: function(){
      wx.request({
        url: 'http://39.105.191.130:8000/deltdt?dtid='+this.data.momentid,
        success: res=>{
          wx.showToast({
            title: '已删除动态',
          })
          wx.navigateBack({})
        }
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //options是从其他页面跳转过来是传递进来的参数
        //获取详细信息
        this.setData({
          momentid:options.id,
          candel:app.globalData.admin
        })
        this.getMomentDetail(options)
            //获取评论列表
        this.getCommentsList(options)

    },
    Star: function(e){
      var that = this
      var csed = that.data.csed
      wx.request({
        url: 'http://39.105.191.130:8000/makesc?id='+app.globalData.dynamicId+'&dtid='+this.data.momentid,
        //POST请求要添加下面的header设置
        method: 'GET',
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        success: function (res) {
          if(res.data != 0)
          wx.showToast({
            title: '收藏成功',
          })
          else {
            wx.showToast({
              title: '已取消收藏',
            })
          }
          that.setData({
            csed:!csed
          })
        },
        fail: function (res) {
          wx.showToast({
            title: '提交失败',
          })
        }
      })
    },
    //获取视频详情信息
    getMomentDetail(momentId) {
        var that = this
        console.log(momentId.id)
      wx.request({
        url: "http://39.105.191.130:8000/getdtxq?dtid="+momentId.id+'&id='+app.globalData.dynamicId,
        success(res) {
          if (res) {
            that.setData({
              momentDetail: res.data[0].fields
            })
            console.log("success")
          }
          that.setData({
            dzed:res.data[0].fields.dzed
          })
          that.setData({
            csed:res.data[0].fields.csed
          })
          console.log(that.data.momentDetail)
        }
      })
    },
    //获取评论列表
    getCommentsList(momentId) {
        let that = this
        wx.request({
            url: 'http://39.105.191.130:8000/getdthf?dtid='+momentId.id,
            success(res) {
                console.log(res)
                that.setData({
                    commentsList: res.data
                })
                console.log(res.data)
            }
        })
    },
  delcm: function(e){
    let id = this.data.momentid
    console.log(id)
    wx.request({
      url: 'http://39.105.191.130:8000/deltpl?plid='+e.currentTarget.id,
      success: res=>{
        wx.showToast({
          title: '删除成功',
        })
      }
    })
  },
  thumbup: function(){
    var that=this
    var dzed = this.data.dzed
    wx.request({
      url: 'http://39.105.191.130:8000/makedz?id='+app.globalData.dynamicId+'&dtid='+this.data.momentid,
      //POST请求要添加下面的header设置
      method: 'GET',
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success: function (res) {
        console.log(res)
        console.log(app.globalData.dynamicId)
        if(res.data == 0)
          wx.showToast({
            title: '已取消点赞',
          })
        else
          wx.showToast({
            title: '点赞成功',
          })
        that.setData({
          dzed:!dzed
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '提交失败',
        })
      }
    })
  }

})