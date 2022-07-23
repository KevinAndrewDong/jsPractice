/*
22. 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */

var generateParenthesis = function(n) {
    let ret = [];
    helper(n, n, '', ret);
    return ret;
};

const helper = (left, right, parenthesis, ret) => {
    if (left === 0 && right === 0) {
        ret.push(parenthesis);
        return;
    }

    if (left > 0) {
        helper(left - 1, right, parenthesis + '(', ret);
    }
    if (right > 0 && right > left) {
        helper(left, right - 1, parenthesis + ')', ret);
    }
}