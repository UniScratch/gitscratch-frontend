/* eslint-disable no-extend-native */
Date.prototype.format = function (fmt) {
  const o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds() // 毫秒
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }

  return fmt
}

Date.prototype.fromNow = function () {
  const now = new Date()
  const diff = now.getTime() - this.getTime()
  const day = 1000 * 60 * 60 * 24
  const hour = 1000 * 60 * 60
  const minute = 1000 * 60
  const second = 1000
  const month = day * 30
  const year = day * 365
  const yearDiff = Math.floor(diff / year)
  const monthDiff = Math.floor(diff / month)
  const dayDiff = Math.floor(diff / day)
  const hourDiff = Math.floor(diff / hour)
  const minuteDiff = Math.floor(diff / minute)
  const secondDiff = Math.floor(diff / second)
  if (yearDiff > 0) {
    return yearDiff + ' 年前'
  } else if (monthDiff > 0) {
    return monthDiff + ' 个月前'
  } else if (dayDiff > 0) {
    return dayDiff + ' 天前'
  } else if (hourDiff > 0) {
    return hourDiff + ' 小时前'
  } else if (minuteDiff > 0) {
    return minuteDiff + ' 分钟前'
  } else if (secondDiff > 0) {
    return secondDiff + ' 秒前'
  } else {
    return '刚刚'
  }
}
