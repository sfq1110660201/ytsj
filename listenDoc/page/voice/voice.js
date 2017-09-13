// page/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleContent: "2004年8月19日，Google公司在纳斯达克上市，后来被称为“三驾马车”的公司两位共同创始人与出任首席执行官的埃里克·施密。",
    referenceInfo: [
      {
        text: "fsfs df 是否水电费说"
      }, {
        text: "fsfs df 是否水电费说"
      }
    ],
    commentData: [
      {
        content: "到底倒爱圣诞节哦爱神的箭，奥斯大家都爱刷机大师加速度",
        src: "/image/userImg.png",
        thumbups: 123,
        comUserName: "史丹佛",
        comTime: "2012-12-12"
      }, {
        content: "到底倒爱圣诞节哦爱神的箭，奥斯大家都爱刷机大师加速度",
        src: "/image/userImg.png",
        thumbups: 123,
        comUserName: "史丹佛",
        comTime: "2012-12-12"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        console.log(res)
      },
      fail:function(res){
        console.log(res)
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