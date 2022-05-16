/*
39. 组合总和
给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。

对于给定的输入，保证和为 target 的不同组合数少于 150 个。



示例 1：

输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
 */
/**
 回溯法
 - 跳过i， 处理i + 1
 - 添加candidates[i]， 处理 i
 **/
var combinationSum = function(candidates, target) {
    const ans = [];

    const dfs = (target, combine, idx) => {
        if (target == 0) {
            ans.push(combine);
        } else if (target > 0 && idx < candidates.length) {
            dfs(target, combine, idx + 1);
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    };

    dfs(target, [], 0);
    return ans;
};