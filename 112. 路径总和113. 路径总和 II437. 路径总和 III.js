/*
112. 路径总和
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

叶子节点 是指没有子节点的节点。
 */

var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }

    return hasPathSum(root.left, targetSum - root.val)
        || hasPathSum(root.right, targetSum - root.val);
};

/*
113. 路径总和 II
给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 */

var pathSum = function(root, targetSum) {
    let ret = [];
    let path = [];
    dfs(ret, path, root, targetSum);
    return ret;
};

var dfs = function(ret, path, root, targetSum) {
    if (!root) return;

    path.push(root.val);
    if (root.val === targetSum && root.left === null && root.right === null) {
        ret.push([...path]);
    }
    dfs(ret, path, root.left, targetSum - root.val);
    dfs(ret, path, root.right, targetSum - root.val);
    path.pop();
}

/*
437. 路径总和 III
给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 */
var pathSum = function(root, targetSum) {
    let map = new Map();
    //key:和, value:次数
    map.set(0, 1);
    return dfs(root, targetSum, 0, map);
};

var dfs = function(root, targetSum, cur, map) {
    if (!root) return 0;

    let count = 0;
    cur += root.val;

    //targetSum 数目 === cur - targetSum 数目
    count = map.get(cur - targetSum) || 0;
    //回溯 + 前缀和
    map.set(cur, (map.get(cur) || 0) + 1);
    count += dfs(root.left, targetSum, cur, map);
    count += dfs(root.right, targetSum, cur, map);
    map.set(cur, (map.get(cur) || 0) - 1);

    return count;
}