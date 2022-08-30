/*
440. 字典序的第K小数字
给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字。



示例 1:

输入: n = 13, k = 2
输出: 10
解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
 */

var findKthNumber = function(n, k) {
    let cur = 1;//访问的数字
    k--;//往后数几个

    while (k > 0) {
        let steps = getSteps(cur, n);
        if (steps <= k) {
            k = k - steps;//少了‘子节点个数’
            cur++;//父节点往右挪一个
        } else {
            k--;//少一个
            cur = cur * 10;//进入子节点
        }
    }

    return cur;
};

var getSteps = function(cur, n) {
    let first = cur, last = cur;
    let steps = 0;

    while (first <= n) {//递归到所有子节点
        steps += Math.min(n, last) - first + 1;
        first = first * 10;
        last = last * 10 + 9;
    }

    return steps;
}