const { formatTime, dateFormat } = require('../../utils/util.js')

var app = getApp()
Page({
    data: {
        page: 'XXXXXXX',
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        userinfo: {
            name: 'hahah慢灵魂',
            age: 22,
            sex: 1,
            xing: '狮子座',
            lastTime: dateFormat(new Date(1484912921216)),
            desc: '带你去看不一样的世界～～',
            info: [
                {
                    text: '学生'
                }
            ],
            tag: [
                {
                    text: '游泳'
                },{
                    text: '游泳'
                },
            ],
            love: [
                {
                    text: '游泳'
                },{
                    text: '游泳'
                }
            ],
            answer: [
                {
                    q: '去那个城市',
                    a: '北京'
                }
            ]
        },
    },
    // init
    onLoad: function() {
        Promise.all([
            app.getSystemInfo(),
            app.getUserInfo()
        ]).then( ([systemInfo, userInfo]) => {
            this.setData({
                showHeight: Math.floor(systemInfo.windowWidth * 9 / 16),
                showWidth: systemInfo.windowWidth,
                pageTitle: '明星片'
            })
        })
    },
    onShareAppMessage: function () {
        const { pageTitle } = this.data
        return {
            title: pageTitle,
            desc: '向大家展示我的魅力～～～',
            path: '/pages/card/card'
        }
    },
    loveBtn: function(e) {
        wx.showToast({
            title: '点赞成功',
            icon: 'success',
            duration: 2000
        })
    },
    shareBtn: function(e) {
        wx.navigateTo({
            url: '/pages/index/index'
        })
    }

})