function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/*
 * @格式化日期
 */
const dateFormat = (date, format = 'yyyy-MM-dd hh:mm:ss', readability = true) => {
    if (!date) return ''
    if (typeof date === 'string' && /[\u4e00-\u9fa5]+/g.test(date)) {
        return date
    }
    if (typeof date === 'string' && /^\d+$/.test(date)) {
        date = new Date(+date)
    }

    if (Object.prototype.toString.call(date) != '[object Date]') {
        date = new Date(date)
    }

    const duration = Date.now() - date
    const level1 = 60 * 1000                // 1 分钟
    const level2 = 60 * 60 * 1000           // 1 小时
    const level3 = 24 * 60 * 60 * 1000      // 1 天
    const level4 = 3 * 24 * 60 * 60 * 1000  // 3 天
    if (readability && duration < level4) {
        let str = ''
        if (duration < level1) str = '刚刚'
        if (duration > level1 && duration < level2) str = `${Math.round(duration / level1)}分钟前`
        if (duration > level2 && duration < level3) str = `${Math.round(duration / level2)}小时前`
        if (duration > level3 && duration < level4) str = `${Math.round(duration / level3)}天前`
        return str
    }

    const o = {
        'M+': date.getMonth() + 1,  // 月份
        'd+': date.getDate(),       // 日
        'h+': date.getHours(),      // 小时
        'm+': date.getMinutes(),    // 分
        's+': date.getSeconds(),    // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(),  // 毫秒
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length))
    }
    Object.keys(o).forEach((k) => {
        if (new RegExp(`(${k})`).test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((String(o[k])).length)))
        }
    })
    return format
}


function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  dateFormat: dateFormat
}
