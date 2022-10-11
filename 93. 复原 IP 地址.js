/*
93. 复原 IP 地址
有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。



示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
 */

var restoreIpAddresses = function(s) {
    const res = [];

    const dfs = (subRes, start) => {
        if (subRes.length === 4 && start === s.length) {
            res.push(subRes.join('.'));
        }
        if (subRes.length === 4 && start < s.length) {
            return;
        }

        for (let len = 1; len <= 3; len++) {
            if (start + len - 1 >= s.length) return;
            if (len > 1 && s[start] === '0') return;
            const str = s.substring(start, start + len);
            if (len === 3 && str > '255') return;

            subRes.push(str);
            dfs(subRes, start + len);
            subRes.pop();
        }
    }

    dfs([], 0);
    return res;
};