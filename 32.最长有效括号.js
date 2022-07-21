/*
32. 最长有效括号
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。



示例 1：

输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
 */

var longestValidParentheses = function(s) {

    let stack = [];
    stack.push(-1);

    let result = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) == '(') {
            stack.push(i);//i:上一个（
        } else {
            stack.pop();

            if (stack.length == 0) {
                stack.push(i);//i:上一个）
            } else {
                result = Math.max(result, i - stack[stack.length - 1]);
            }
        }
    }
    return result;
};