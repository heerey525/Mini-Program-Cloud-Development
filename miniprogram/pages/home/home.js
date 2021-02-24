// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "张明",
    id: 233,
    itemurl: "/pages/home/imgshow/imgshow",
    itemclass: "event-item",
    imagesrc: "https://hackwork.oss-cn-shanghai.aliyuncs.com/lesson/weapp/4/weapp.jpg",
    imagemode: "widthFix",
    imagewidth: "100%",
    love1: 520,
    love2: "520",
    forever1: 1314,
    forever2: "1314",
    newstitle: [
      "瑞幸咖啡：有望在三季度达到门店运营的盈亏平衡点",
      "腾讯：广告高库存量还是会持续到下一年",
      "上汽集团云计算数据中心落户郑州，总投资20亿元",
      "京东：月收入超2万元快递小哥数量同比增长163%",
      "腾讯：《和平精英》日活跃用户已超五千万",
    ],
    movie: {
      name: "肖申克的救赎",
      englishname: "The Shawshank Redemption",
      country: "美国",
      year: 1994,
      img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
      desc: "有的人的羽翼是如此光辉，即使世界上最黑暗的牢狱，也无法长久地将他围困！"
    },
    movies: [{
        name: "肖申克的救赎",
        englishname: "The Shawshank Redemption",
        country: "美国",
        year: 1994,
        img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
        desc: "有的人的羽翼是如此光辉，即使世界上最黑暗的牢狱，也无法长久地将他围困！",
        actor: [{
            name: "蒂姆·罗宾斯",
            role: "安迪·杜佛兰"
          },
          {
            name: "摩根·弗里曼",
            role: "艾利斯·波伊德·瑞德"
          },
        ]
      },
      {
        name: "霸王别姬",
        englishname: "Farewell My Concubine",
        country: "中国",
        year: 1993,
        img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.webp",
        desc: "风华绝代",
        actor: [{
            name: "张国荣",
            role: "程蝶衣"
          },
          {
            name: "张丰毅",
            role: "段小楼"
          },
        ]
      },
    ],
    grids: [{
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon1.png",
        title: "招聘"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon2.png",
        title: "房产"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon3.png",
        title: "二手车新车"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon4.png",
        title: "二手"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon5.png",
        title: "招商加盟"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon6.png",
        title: "兼职"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon7.png",
        title: "本地"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon8.png",
        title: "家政"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon9.png",
        title: "金币夺宝"
      },
      {
        imgurl: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/icon10.png",
        title: "送现金"
      },
    ],
    listicons: [{
        icon: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/listicons1.png",
        title: "我的文件",
        desc: ""
      },
      {
        icon: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/listicons2.png",
        title: "我的收藏",
        desc: "收藏列表"
      },
      {
        icon: "https://hackweek.oss-cn-shanghai.aliyuncs.com/hw18/hackwork/weapp/listicons3.png",
        title: "我的邮件",
        desc: ""
      }
    ],
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    interval: 5000,
    duration: 1000,
    indicatorDots: true,
    indicatorColor: "#ffffff",
    activecolor: "#2971f6",
    autoplay: true,
    musicinfo: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    latitude: 22.540503,
    longitude: 113.934528,
    markers: [{
        id: 1,
        latitude: 22.540503,
        longitude: 113.934528,
        title: '深圳腾讯大厦'
      },
      {
        id: 2,
        latitude: 22.540576,
        longitude: 113.933790,
        title: '万利达科技大厦'
      },
      {
        id: 3,
        latitude: 22.522807,
        longitude: 113.935338,
        title: '深圳腾讯滨海大厦'
      },
      {
        id: 4,
        latitude: 22.547400,
        longitude: 113.944370,
        title: '腾讯C2'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getNetworkType({
      success(res) {
        console.log(res)
      }
    });
    wx.getSystemInfo({
      success (res) {
        console.log("设备的所有信息",res)
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '云开发技术训练营',
      path: "pages/home/home",
      imageUrl: "https://hackwork.oss-cn-shanghai.aliyuncs.com/lesson/weapp/4/weapp.jpg",
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})