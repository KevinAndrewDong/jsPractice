/*
根据 逆波兰表示法，求表达式的值。

有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

注意 两个整数之间的除法只保留整数部分。

可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 */

var evalRPN = function(tokens) {
    let stack = [];
    for (let item of tokens) {
        if (!isNaN(item)) {
            stack.push(parseInt(item));
        } else {
            let num2 = stack.pop();//stack.pop是逆序的
            let num1 = stack.pop();

            if (item === '+') {
                stack.push(num1 + num2);
            } else if (item === '-') {
                stack.push(num1 - num2);
            } else if (item === '*') {
                stack.push(num1 * num2);
            } else if (item = '/') {
                stack.push(parseInt(num1 / num2));
            }
        }
    }
    return stack.pop();
};