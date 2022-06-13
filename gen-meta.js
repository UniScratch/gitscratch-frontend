const package = require('./package.json')
const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')
const time = new Date();

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }

    return fmt;
}

let commitHash = 'unknown'
try {
    commitHash = childProcess.execSync('git show -s --format=%h').toString().trim()
} catch (err) {
    console.warn('WARNING: Can\'t get last commit hash. Use \'unknown\' instead.')
}
const meta = {
    appName: 'GitScratch',
    appVersion: package.version,
    appVersionFull: package.version + "-" + commitHash + "-" + time.format("yyyyMMddhhmmss"),
    compileTime: time.format("yyyy-MM-dd hh:mm:ss"),
    commitHash
}


fs.writeFileSync(path.join(__dirname, 'static/meta.json'), JSON.stringify(meta));
