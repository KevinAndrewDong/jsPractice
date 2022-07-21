/*
301. 删除无效的括号
给你一个由若干括号和字母组成的字符串 s ，删除最小数量的无效括号，使得输入的字符串有效。

返回所有可能的结果。答案可以按 任意顺序 返回。



示例 1：

输入：s = "()())()"
输出：["(())()","()()()"]
 */

var removeInvalidParentheses = function(s) {
    let left = 0;
    let count = 0;//有几对()
    for (let ch of s) {
        if (ch === '(') {
            left++;
        } else if (ch === ')' && left > 0) {
            left--;
            count++;
        }
    }

    const n = s.length;
    let ret = new Set();
    const dfs = (i, left, right, str) => {
        if (left < right || left > count || right > count) return;//(要多于)

        if (i === n) {
            if (left === count && right === count) ret.add(str);
            return;
        }

        const ch = s[i];
        if (ch === '(') {
            dfs(i + 1, left + 1, right, str + '(');
            dfs(i + 1, left, right, str);
        } else if (ch === ')') {
            dfs(i + 1, left, right + 1, str + ')');
            dfs(i + 1, left, right, str);
        } else {
            dfs(i + 1, left, right, str + ch);
        }
    }

    dfs(0, 0, 0, '');
    return [...ret];
};