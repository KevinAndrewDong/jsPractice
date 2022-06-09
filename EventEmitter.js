class EventEmitter{
    constructor(){
        //在事件被创建或者实例化的时候调用此方法
        //注册一个空对象
        this.events = {}
    }
    //绑定事件函数
    on(type,callback){
        //首先判断这个事件是否存在
        if(this.events[type]){
            //如果存在的话直接给数组this.events[type]尾部添加回调函数
            this.events[type].push(callback)
        }
        else{
            //如果不存在则建立
            this.events[type] = [callback]
        }
    }

    //触发事件
    emit(type,...args){
        if(this.events[type]){
            //遍历数组，并且传值运算
            this.events[type].forEach(fn=>{
                fn(...args)
            })
        }
    }

    //停止监听某个事件
    off(type,callback){
        if(this.events[type]){
            //使用过滤器filter 只有fn和传入的callback不相等的时候留下
            this.events[type] = this.events[type].filter(fn=>{
                fn !== callback
            })
        }
    }

    //单次监听器，只能被触发一次，下次触发就不会响应
    once(type,callback){
        let onlyOnce = function(...args){
            //执行此回调函数
            callback(...args)
            //执行完毕后关闭回调函数，就达到了一次性触发
            this.off(type,onlyOnce)
        }
        //绑定onlyOnce回调函数
        this.on(type,onlyOnce)
    }
}

let e = new EventEmitter()
e.on('喝水时间到：',function(name){
    console.log(name+'该喝水了')
})
e.on('吃饭时间到：',function(name){
    console.log(name+'该吃饭了')
})
e.emit('喝水时间到：','蒋若依')
e.emit('吃饭时间到：','马强')
