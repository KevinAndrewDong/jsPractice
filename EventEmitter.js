class EventEmitter{
    constructor(){
        //在事件被创建或者实例化的时候调用此方法
        this.events = {}
    }
    //绑定事件函数
    on(type,callback){
        if(this.events[type]){
            this.events[type].push(callback)
        }
        else{
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
            //留下fn和传入的callback不相等的
            this.events[type] = this.events[type].filter(fn=>{
                fn !== callback
            })
        }
    }

    //单次监听器，只能被触发一次，下次触发就不会响应
    once(type,callback){
        let onlyOnce = function(...args){
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
