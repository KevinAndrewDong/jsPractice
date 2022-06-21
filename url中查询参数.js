/*
通过正则表达式获取单个参数
url中的所有查询参数可以通过 window.location.search 字段获取，以字符串的形式返回。并有固定的格式 ?param1=value1&param2=value2···，所以可以正则表达式匹配。
分析下需要匹配的格式：

param=value, 其中需要获取的是value部分，但是也需要 param= 参与匹配，但是不能参与返回结果，这里有前后查找的问题
?param=value 和 &param=value 都可能存在，参数名称紧跟在?或&之后；还要注意的是，要区分 emali和mail 这种名称，/mail/既能匹配到email又能匹配mail，所以要给参数名称加一个边界，名称的上一个字符要是一个非单词(\W)的字符，这样就可以解决这两个问题
value后可能是空，也可能是下一组参数(以&分割)，所以value的值要匹配到[^&]为止
由于参数名称是变化的，所以需要用字符串的形式来生成正则表达式
 */

function getUrlParamsByName(name) {
    // \b 边界
    // ?<= 向后匹配
    // 字符串转成正则表达式，其中的'\b'类型的特殊字符要多加一个'\'
    let reg = new RegExp(`(?<=\\b${name}=)[^&]*`),
        str = location.search || '',
        target = str.match(reg);

    if(target) {
        return target[0]
    }

    return;
}

//解析所有参数，以对象返回

function getUrlParams() {
    let obj = {};

    if (!window) {
        return;
    }

    let str = window.location.search || '';

    if (str && str.slice(1)) {
        // 去掉 ？ ，然后以 & 分割
        let queryArray = str.slice(1).split('&');
        queryArray.map((query) => {
            // param=value 以 = 分割
            let temp = query.split('=');
            if(temp.length > 1) {
                // 收集参数
                obj[temp[0]] = temp[1];
            }
        })
    }

    return obj;
}
