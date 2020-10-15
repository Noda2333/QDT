var app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        //首页导航数据
        navList: [{
          "text": "关注",
          "id": 0
        },
        {
          "text": "广场",
          "id": 1
        },
        {
          "text": "热榜",
          "id": 2
        },
        {
          "text": "话题",
          "id": 3
        }],
        //首页导航菜单当前active索引
        currentIndex: 0,
        //视频列表
        momentList1: [],
        momentList2: [{
          User_ID: "星宇",
          Num_activity_like: "100",
          Num_activity_replies:"13",
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
          Num_activity_replies:"1",
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
        momentList3: [],
      labelList: [{
        "id": 0,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",
        "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
        "playCount": "24.9万",
        "commentCount": "1345",
        "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
        {
          "id": 1,
          "link": "",
          "imgSrc": "https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",
          "desc": "【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",
          "playCount": "63.8万",
          "commentCount": "7825",
          "videoSrc": "http://files.ak48.xyz/20181219211856.mp4"
        },
        {
          "id": 2,
          "link": "",
          "imgSrc": "https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",
          "desc": "迈克尔杰克逊封神的12秒，无人能做到",
          "playCount": "63.8万",
          "commentCount": "7825",
          "videoSrc": "http://files.ak48.xyz/20181219211920.mp4"
        },
        {
          "id": 3,
          "link": "",
          "imgSrc": "https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",
          "desc": "【2018】年度影视混剪 Ready Story 2018【混剪】",
          "playCount": "40.0万",
          "commentCount": "1066",
          "videoSrc": "http://files.ak48.xyz/20181219211910.mp4"
        },
        {
          "id": 4,
          "link": "",
          "imgSrc": "https://i2.hdslb.com/bfs/archive/2cc604557cab1f6fd79591981891467f7b825010.jpg@320w_200h.webp",
          "desc": "当你觉得扛不住的时候来看看这段视频",
          "playCount": "82.7万",
          "commentCount": "719",
          "videoSrc": ""
        },
        {
          "id": 5,
          "link": "",
          "imgSrc": "https://i1.hdslb.com/bfs/archive/0fc171eaa7bf6b81cf5427fc57db104a4ef719d7.jpg@320w_200h.webp",
          "desc": "【1080/漫威/衔接踩点向】前方高能！带你体验完美流畅的衔接踩点视觉盛宴！",
          "playCount": "28.9万",
          "commentCount": "817",
          "videoSrc": ""
        }],
        //下划线css属性
        lineLeft: 0,
        //下划线css属性
        lineWidth: 0
    },
    //获取首页导航数据
    getNavList() {
        let that = this
        // wx.request({
        //     url: "https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/navList",
        //     success(res) {
        //         if (res.data.code === 0) {
        //             that.setData({
        //                 navList: res.data.data.navList
        //             })
        //         }
        //         //导航数据获取完毕后给【首页】选项初始化一个下划线
        //         that.activeUnderline('0')
        //     }
        // })
      that.activeUnderline('0')
    },
    //给当前active的导航选项添加下划线(参数是当前active选项的索引，从0开始)
    activeUnderline(index) {
        let that = this
            //获取当前导航选项的位置信息
        wx.createSelectorQuery().select(`#nav${index}`).boundingClientRect((res) => {
            that.setData({
                lineWidth: parseInt(res.width),
                lineLeft: parseInt(res.left)
            })
        }).exec()
    },
    //导航菜单点击事件
    tapTab(e) {
        //给active的菜单选项设置下划线
        this.activeUnderline(e.target.dataset.index)

        this.setData({
            //dataset里的index是wxml中自己添加的data-index的index属性
            currentIndex: e.target.dataset.index
        })
    },
    //页面滑动事件
    swiperTab(e) {
        //给active的菜单选项设置下划线
        this.activeUnderline(e.detail.current)

        this.setData({
            currentIndex: e.detail.current
        });
    },
    //获取动态列表1
    getmomentList1() {
        let that = this
        console.log(app.globalData.dynamicId)
        wx.request({
          url: "http://39.105.191.130:8000/gethtdt?id="+app.globalData.dynamicId,
          method:"GET",
            success(res) {
                if (res) {
                    that.setData({
                      momentList1: res.data
                    })
                }
              console.log(that.momentList1)
            }
        })
    },
    //获取动态列表2
    getmomentList2() {
        let that = this
        wx.request({
          url: "http://39.105.191.130:8000/getdt",
            success(res) {
                if (res) {
                    that.setData({
                        momentList2: res.data
                    })
                }
            }
            
        })

    },
    getmomentList3(){
      let that = this
      wx.request({
        url: "http://39.105.191.130:8000/getrebang",
        success(res) {
          if (res) {
            that.setData({
              momentList3: res.data
            })
          }
        }
      })
    },
    getLabelList(){
      let that = this
      wx.request({
        url: "http://39.105.191.130:8000/gethtt",
        success(res) {
          if (res) {
            that.setData({
              labelList: res.data
            })
          }
        }
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //获取导航栏数据
        this.getNavList()
            //获取首页轮播图数据
        this.getmomentList1()
            //获取视频列表
        this.getmomentList2()
        this.getmomentList3()
        this.getLabelList()
    },
    onShow: function () {
      this.getmomentList1()
      this.getmomentList2()
      this.getmomentList3()
      this.getLabelList()
    },
})