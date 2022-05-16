/*
46. 全排列
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */

var permute = function(nums) {
    if (nums.length == 0) return [];

    const res = [];
    const enmurate = (preArr, candidates) => {
        if (candidates.length == 1) res.push([...preArr, ...candidates]);

        for (let i = 0; i < candidates.length; i++) {
            const temp = candidates.slice();
            temp.splice(i, 1);
            enmurate([...preArr, candidates[i]], temp);
        }
    }

    enmurate([], nums.slice());
    return res;
};

/*
47. 全排列 II
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。



示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
 */

var permuteUnique = function(nums) {
    if (nums.length == 0) return [];

    const res = [];
    const enmurate = (preArr, candidates) => {
        if (candidates.length == 1) res.push([...preArr, ...candidates]);

        let set = new Set();
        for (let i = 0; i < candidates.length; i++) {
            if (!set.has(candidates[i])) {
                set.add(candidates[i]);

                const temp = candidates.slice();
                temp.splice(i, 1);
                enmurate([...preArr, candidates[i]], temp);
            }
        }
    }

    enmurate([], nums.slice());
    return res;
};