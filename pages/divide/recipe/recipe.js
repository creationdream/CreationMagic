// pages/divide/recipe/recipe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vegs:[{
      "name":"菠菜红豆菜",
      "conponent":["菠菜","红豆"],
      "id":"123"
    },{
      "name":"精灵鱼熬汤",
      "conponent":["精灵鱼","红豆"],
      "id":"123"
    },{
      "name":"菠菜鱼",
      "conponent":["菠菜","鱼"],
      "id":"123"
    }],
    current_vegs:[],
    btn_name:["菠菜","红豆","精灵鱼"]

  },
  select_veg:function(e)
  {
    console.log(e);
    var veg_name=e.currentTarget.dataset.veg;
    console.log(veg_name)
    var result=[]
    this.setData({
      current_vegs:result
    })
    for(var index in this.data.vegs)
    {
      var veg=this.data.vegs[index]
      var conponents=this.data.vegs[index].conponent
      for(var i in conponents)
      {
        if(conponents[i]==veg_name)
        {
          result.push(veg)  
        }
      }
      this.setData({
        current_vegs:result
      })
      
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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