/*
1. 在beforeCreate和created钩子函数之间的生命周期
在这个生命周期之间，进行初始化事件，进行数据的观测，可以看到在created的时候数据已经和data属性进行绑定

2. created钩子函数和beforeMount间的生命周期

首先会判断对象是否有el选项。
如果有的话就继续向下编译，
如果没有el选项，则停止编译，也就意味着停止了生命周期，直到在该vue实例上调用vm.$mount(el)。


然后，我们往下看，template参数选项的有无对生命周期的影响。
（1）.如果vue实例对象中有template参数选项，则将其作为模板编译成render函数。
（2）.如果没有template选项，则将外部HTML作为模板编译。
（3）.可以看到template中的模板优先级要高于outer HTML的优先级。

所以综合排名优先级：
render函数选项 > template选项 > outer HTML.


3. beforeMount和mounted 钩子函数间的生命周期

可以看到此时是给vue实例对象添加$el成员，并且替换掉挂载的DOM元素。

4. mounted

在mounted之前h1中还是通过{{message}}进行占位的，因为此时还未挂在到页面上，还是JavaScript中的虚拟DOM形式存在的。在mounted之后可以看到h1中的内容发生了变化。

5. beforeUpdate钩子函数和updated钩子函数间的生命周期

当vue发现data中的数据发生了改变，会触发对应组件的重新渲染，先后调用beforeUpdate和updated钩子函数。

6.beforeDestroy和destroyed钩子函数间的生命周期

beforeDestroy钩子函数在实例销毁之前调用。在这一步，实例仍然完全可用。
destroyed钩子函数在Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

 */