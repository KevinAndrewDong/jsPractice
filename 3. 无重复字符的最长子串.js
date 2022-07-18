/*
3. 无重复字符的最长子串
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。



示例 1:

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    let map = new Map();
    let left = 0;
    let maxLen = 0;

    //left: 左指针，i : 右指针
    for (let i = 0; i < n; i++) {
        if (map.has(s[i])) {
            //去重：跳过上一个s[i]
            left = Math.max(left, map.get(s[i]) + 1);
        }
        map.set(s[i], i);

        maxLen = Math.max(maxLen, i - left + 1);
    }
    return maxLen;
};