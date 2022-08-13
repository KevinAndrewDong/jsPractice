//debounce 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
function debounce (func, wait) {
    let timer = null;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(function() {
            func.apply(this, arguments);
        }, wait);
    };
}


//throttle 每隔一段时间，只执行一次函数。
function throttle(func, wait) {
    let timer = null;

    return function() {
        if (timer) {
            return ;
        }

        timer = setTimeout(function() {
            func.apply(this, arguments);
            timer = null;
        }, wait);
    }
}
