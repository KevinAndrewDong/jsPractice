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

/*
395. 至少有 K 个重复字符的最长子串
给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。



示例 1：

输入：s = "aaabb", k = 3
输出：3
解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
 */

var longestSubstring = function(s, k) {
    return dfs(s, 0, s.length, k);
};

const dfs = (s, start, end, k) => {
    if (end < k) return 0;

    let map = new Map();
    for (let i = start; i < end; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (let mid = start; mid < end; mid++) {
        if (map.get(s[mid]) >= k) continue;

        //跳过次数小于k的那一段
        let midNext = mid + 1;
        while (midNext < end && map.get(s[midNext]) < k) {
            midNext++;
        }
        return Math.max(dfs(s, start, mid, k), dfs(s, midNext, end, k));
    }

    return (end - start);
}