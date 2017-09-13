// page/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    voices:[
      {
        docSrc:"http://sxbjxh.oss-cn-shanghai.aliyuncs.com/upload/ff8080815d107c98015d1093c20a0005y.jpg",
        docName:"王亚琴",
        docPosition:"主任医师",
        docHospital:"陕西省人民医院",
        title:"APIItem.enN卡萨丁看了就爱上邓丽君大赛科技大塑料袋拉丝机抵抗力静安寺ame",
        audioSrc:"http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
        action: { method:'pause'},
        listenCount:"1223",
        collects:"323",
        cares:"21345"

      }, {
        docSrc: "http://sxbjxh.oss-cn-shanghai.aliyuncs.com/upload/ff8080815d107c98015d1093c20a0005y.jpg",
        docName: "王亚琴2",
        docPosition: "主任医师2",
        docHospital: "陕西省人民医院2",
        title: "APIItem.enN卡萨丁看了就爱上邓丽君大赛科技大塑料袋拉丝机抵抗力静安寺am2e",
        audioSrc: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
        action: { method: 'pause'},
        listenCount: "12223",
        collects: "3213",
        cares: "213145"

      }
    ],
    isPlaying:false,
    audioCtx:"",
    modelWid:"",
    modelHet:"",
    isModelShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        that.setData({
          modelWid: res.windowWidth,
          modelHet: res.windowHeight
        })
      }
    })
  
  },
  palyAudio(e){
    console.log(e.target.id)
    var index = e.target.id
    this.audioCtx = wx.createAudioContext('myAudio' + index)
    //console.log(this.audioCtx)
    this.audioCtx.pause()
    // if (this.audioCtx.play()){
    //   console.log(234)
    // }else{
    //   this.audioCtx.pause()
    // }
  },
  goSearch(){
    wx.navigateTo({
      url: "../search/search"
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