/*
124. 二叉树中的最大路径和
路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。
 */

var maxPathSum = function(root) {
    let result = Number.MIN_SAFE_INTEGER;
    dfs(root);
    return result;

    function dfs(root) {
        if (!root) return -1;

        let left = Math.max(0, dfs(root.left));// 如果子树路径和为负则应当置0表示最大路径不包含子树
        let right = Math.max(0, dfs(root.right));
        result = Math.max(left + right + root.val, result);

        return Math.max(left, right) + root.val;
    }
};