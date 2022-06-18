/* 判断setState()更新状态时异步还是同步的，主要是看执行setState的位置

在React控制的回调函数中（生命周期钩子，react事件监听回调）这种情况是异步的。
在非react控制的异步回调函数中（定时器回调/原生事件监听回调/promise回调）这种情况是同步的。

核心技巧：函数式传入的state总是能够获取到最新的state,但是对象式则不能，但是最后render只会更新一次。
 */

/*
setState 不会立即改变 React 组件中 state 的值
setState 通过引发一次组件的更新过程来引发重新绘制
多次 setState 函数调用产生的效果会合并(批处理)

setState 是同步还是异步?

代码同步，渲染看模式
legacy模式：
非原生事件、setTimeout/setInterval 的情况下为异步;
addEventListener绑定原生事件、setTimeout/setInterval 时会同步
concurrent 模式：异步
 */

class App extends Component {
    state = {
        count: 0
    }
    // 在生命周期钩子函数中
    componentDidMount() {
        this.setState({ count: this.state.count + 1 })
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count);//0

        this.setState(state => ({ count: state.count + 1 }))
        this.setState(state => ({ count: state.count + 1 }))
        console.log(this.state.count);//0 //render:3

        setTimeout(() => {
            this.setState(state => ({ count: state.count + 1 }))//render:6
            console.log('setTimeout:', this.state.count);//setTimeout:6

            this.setState(state => ({ count: state.count + 1 }))//render:7
            console.log('setTimeout:', this.state.count);//setTimeout:7
        }, 0)
        Promise.resolve().then(value => {
            this.setState(state => ({ count: state.count + 1 }))//render: 4
            console.log('Promise',this.state.count);//Promise:4
            this.setState(state => ({ count: state.count + 1 }))//render:5
            console.log('Promise:',this.state.count);//Promise:5
        })
    }

    render() {
        const { count } = this.state;
        console.log('render: ', count);//render: 0
        return (
            <div>
                <h1>当前求和为{count}</h1>
            </div>
        )
    }
}
