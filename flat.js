//将一个“多维”数组降维
//递归
function myFlat(arr) {
    let res = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            res = res.concat(myFlat(item));
            // 注意concat方法返回一个新数组，不会改变原数组
        } else {
            res.push(item);
        }
    }
    return res;
}
//迭代
function myFlat(arr) {
    let res = [];
    const stack = [].concat(arr);

    while (stack.length > 0) {
        const item = stack.pop();
        if (Array.isArray(item)) {
            // 用扩展运算符展开一层
            stack.push(...item);
        } else {
            item !== undefined && res.unshift(item);
        }
    }
    return res;
}