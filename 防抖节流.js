//debounce 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
function debounce (func, wait) {
    let timer = null;


    return function () {
        if (timer) {
            clearTimeout(timer);
            timer = null
        }

        let self = this;
        let args = arguments;

        timer = setTimeout(function() {
            func.apply(self, args);
            timer = null;
        }, wait);
    };
}


//throttle 每隔一段时间，只执行一次函数。

function throttle(func, wait) {
    let lastTime = 0;
    let timer = null;

    return function() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        let self = this;
        let args = arguments;
        let nowTime = +new Date();

        const remainWaitTime = wait - (nowTime - lastTime);

        if (remainWaitTime <= 0) {
            lastTime = nowTime;
            func.apply(self, args);
        } else {
            timer = setTimeout(function() {
                //remainWaitTime后到第二段，lastTime设置为起始点
                lastTime = +new Date();
                func.apply(self, args);
                timer = null;
            }, remainWaitTime);
        }
    }
}
