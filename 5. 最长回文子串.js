/*
5. 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。


 */

var longestPalindrome = function(s) {
    if (s.length < 1) return '';

    //定义中心拓展法
    const expand = (s, left, right) => {
        while(left >= 0 && right < s.length &&
        s.charAt(left) === s.charAt(right)) {
            left--;
            right++;
        }
        return (right - 1) - (left + 1) + 1;
    }

    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        //比较奇偶两种情况
        let len1 = expand(s, i, i);
        let len2 = expand(s, i, i + 1);
        let maxLen = Math.max(len1, len2);
        //找起点和终点
        if (maxLen > end - start) {
            start = i - maxLen / 2;
            end = i + maxLen / 2;
        }

    }
    //左闭右开
    return s.substring(start + 1, end + 1);
};