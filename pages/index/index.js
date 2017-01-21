//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎来到名人，开始向大家分享你的魅力吧～～',
    userInfo: {},
    isShow: true,
    itemList:[{
        icon: '/images/card.png',
        title: '名片管理',
        type: 'cardlist'
    }, {
        icon: '/images/setting.png',
        title: '设置配置',
        type: 'setting'
    },{
        icon: '/images/hot.png',
        title: '人气排行',
        type: 'hotlist'
    },{
        icon: '/images/card.png',
        title: '打赏作者',
        type: 'card'
    }]
  },
  onLoad: function () {
    var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo()
        .then(function(userInfo){
            //更新数据
            that.setData({
              userInfo:userInfo
            })
            setTimeout(function() {
                that.setData({
                    isShow: false
                })
            }, 1000)
        })
    },
    // 跳转
    navigatorPage: function(e) {
        console.log(2222, e)
        let obj = Object.assign({}, e.currentTarget.dataset)
        console.log(11111, obj)
        app.toPage(obj)
    }
})
