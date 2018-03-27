/** 获取URL参数列表 */
function getUrlParams(parseNumber) {
    parseNumber = parseNumber || false;
    var query = location.search;

    if (! query || query=='?') return null;

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

