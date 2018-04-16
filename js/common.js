/** 获取URL参数列表 */
function getUrlParams(parseNumber) {
    parseNumber = parseNumber || false;
    var query = location.search;

    if (!query || query == '?') return null;

    query = query.substr(1);

    var params = query.split('&'),
        result = {};

    for (var i = 0; i < params.length; i += 1) {
        var data = params[i].split('=');
        if (data[0]) {
            var key = data[0],
                value = data[1] || '';
            if (value && parseNumber && !isNaN(value)) value = parseFloat(value);

            result[key] = value;
        }
    }

    return result;
};


/** 获取URL参数 */
function getUrlParam(key, parseNumber) {
    var params = this.getUrlParams(parseNumber) || {};
    return params[key] || null;
};

/** 格式化日期 **/
function dateFormat(timeStamp, format) {
    let date = new Date(timeStamp);
    var o = {
        "M+": date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "H+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return format;
}

/** 根据日期显示时间 **/
function chatTime(timestamp) {
    let currentDate = new Date();
    let date = new Date(timestamp);
    let currentYear = currentDate.getFullYear();
    let year = date.getFullYear();
    if (currentYear - year > 0) {
        return dateFormat(timestamp, 'yyyy');
    }
    let month = date.getMonth();
    let currentMonth = currentDate.getMonth();
    let day = date.getDate();
    let currentDay = currentDate.getDate();
    if (currentMonth - month > 0 || currentDay - day > 0) {
        return dateFormat(timestamp, 'MM-dd');
    }
    return dateFormat(timestamp, 'HH:mm');
}