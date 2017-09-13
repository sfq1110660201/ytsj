// page/docpages/docpages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabItems: ["推荐专家", "产科专家", "儿科专家", "妇科专家"],
    activeIndex:0,
    docInfos:[
      {
        src:"/image/userImg.png",
        name: "王敏",
        position: "主任医师",
        hospital: "陕西省热人民医院",
        department:"产科",
        experts:"点多大厦将颠大结局啊圣诞快乐阿萨德了看见爱上点开链接爱神的箭；拉三等奖"
      }, {
        src: "/image/userImg.png",
        name: "王敏",
        position: "主任医师",
        hospital: "陕西省热人民医院",
        department: "产科",
        experts: "点多大厦将颠大结局啊圣诞快乐阿萨德了看见爱上点开链接爱神的箭；拉三等奖"
      }, {
        src: "/image/userImg.png",
        name: "王敏",
        position: "主任医师",
        hospital: "陕西省热人民医院",
        department: "产科",
        experts: "点多大厦将颠大结局啊圣诞快乐阿萨德了看见爱上点开链接爱神的箭；拉三等奖"
      }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  changeTab(e){
    console.log(e.target.id)
    this.setData({ activeIndex: e.target.id})
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