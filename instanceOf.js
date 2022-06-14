function myInstanceof(L = null, R) {
    // 对于左侧参数如果是非对象直接返回false
    if (Object(L) !== L) return false
    // 对于右侧参数可以认为只能为函数且不能没有Prototype属性
    if (typeof R !== 'function' || !R.prototype)
        throw new TypeError('Right-hand side of 'instanceof' is not an object')
    // 声明一个变量获取对象的__proto__
    let link = L.__proto__
    // 做循环（当link最终指向null，如果指向null的情况下都找不到那就返回false）
    while (link !== null) {
        // 如果找到说明R.prototype在L的原型链上，即返回true
        if(link === R.prototype) return true
        // 逐级向下
        link = link.__proto__
    }
    return false
}
console.log(myInstanceof(Function, Object));