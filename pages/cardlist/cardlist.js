const { formatTime, dateFormat } = require('../../utils/util.js')
var app = getApp()
Page({
    data: {
        list: [
            {
                title: '明信片1',
                name: '哈哈，杨昆宇',
                createAt: formatTime(new Date()),
                lastAt: formatTime(new Date())
            }, {
                title: '明信片2',
                name: '哈哈，杨昆宇',
                createAt: formatTime(new Date()),
                lastAt: formatTime(new Date())
            },{
                title: '明信片3',
                name: '哈哈，杨昆宇',
                createAt: formatTime(new Date()),
                lastAt: formatTime(new Date())
            }
        ]
    },
    onLoad: function() {
        Promise.all([
            app.getSystemInfo(),
            app.getUserInfo()
        ]).then( ([systemInfo, userInfo]) => {
            console.log(systemInfo.windowHeight)
            this.setData({
                showHeight: systemInfo.windowHeight - 48,
                pageTitle: '明星片'
            })
        })
    },
    getCard: function(e) {
        console.log(e)
        app.toPage({type: 'card'})
    },
    editCard: function(e) {
        app.toPage({type: 'edit'})

    }
})