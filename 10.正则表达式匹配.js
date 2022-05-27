/* 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

 
示例 1：

输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s == null || p == null) return false;

    const m = s.length;
    const n = p.length;

    let dp = new Array(m + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(false);
    }

    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            //第j个字符是*
            if (p.charAt(j - 1) == '*') {
                dp[i][j] = dp[i][j - 2];
                if (matches(s, p, i, j - 1)) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            } else {
                if (matches(s, p, i, j)) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
    }

    return dp[m][n];
};

var matches = function(s, p, i, j) {
    if (i == 0) return false;
    if (p.charAt(j - 1) == '.') return true;

    return s.charAt(i - 1) == p.charAt(j - 1);
};