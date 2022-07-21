/*
438. 找到字符串中所有字母异位词
给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。



示例 1:

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
 */

var findAnagrams = function(s, p) {
    let len = p.length;
    let map = new Map();
    for (let ch of p) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    let window = new Map();
    let validCh = 0;
    let res = [];
    for (let i = 0; i < s.length; i++) {
        //s的字符放入滑动窗口，统计字符
        let right = s[i];
        window.set(right, (window.get(right) || 0) + 1);
        if (window.get(right) === map.get(right)) validCh++;

        if (i >= len) {
            let leftPre = s[i - len];//待去除的字符
            if (window.get(leftPre) === map.get(leftPre)) validCh--;
            //先统计validCh, 再删除leftPre
            window.set(leftPre, window.get(leftPre) - 1);
        }

        if (validCh === map.size) res.push(i - len + 1);
    }

    return res;
};