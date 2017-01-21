/* eslint-disable */
if (typeof Object.assign != 'function') {
    Object.assign = function(target) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        target = Object(target)
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}
/* eslint-enable */


Promise = require('./utils/promise.js')

//app.js

App({
    onLaunch: function () {
        return this.getUserInfo((userInfo) => {
            
        })
  
    },
    getUserInfo: function(){
        var that = this
        return new Promise((resolve, reject) => {
            if(this.globalData.userInfo){
                resolve(this.globalData.userInfo)
            }else{
              //调用登录接口
                wx.login({
                    success: function () {
                        wx.getUserInfo({
                            success: function (res) {
                                that.globalData.userInfo = res.userInfo
                                resolve(that.globalData.userInfo)
                            },
                            fail: reject
                        })
                    },
                    fail:reject
                })
            }
        })
    },
    globalData:{
        userInfo:null
    },
    // 全局跳转
    toPage: function (e) {
        console.log(e)
        const { type, page = 0, uid = '' } = e
        wx.navigateTo({
            url: `/pages/${type}/${type}?page=${page}`
        })
    },
    // 得到系统信息
    getSystemInfo: function() {
        var that = this
        return new Promise((resolve, reject) => {
            if (this.globalData.systemInfo) {
                resolve(this.globalData.systemInfo)
            } else {
                wx.getSystemInfo({
                    success: function(res) {
                        that.globalData.systemInfo = res
                        resolve(res)
                    },
                    fail: function(err) {
                        console.log(err)
                        reject
                    }
                })
            }
        })
    }

})