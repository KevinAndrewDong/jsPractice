/*
543. 二叉树的直径
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 */
var diameterOfBinaryTree = function(root) {
    let result = 0;
    dfs(root);
    return result;

    function dfs(root) {
        if (!root) return -1;
        let left = root.left ? dfs(root.left) + 1 : 0;
        let right = root.right ? dfs(root.right) + 1 : 0;

        result = Math.max(left + right, result);
        return Math.max(left,right);
    }
};

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
        let left = Math.max(0, dfs(root.left));
        let right = Math.max(0, dfs(root.right));

        result = Math.max(left + right + root.val, result);
        return Math.max(left, right) + root.val;
    }
};

/*
687. 最长同值路径
给定一个二叉树的 root ，返回 最长的路径的长度 ，这个路径中的 每个节点具有相同值 。 这条路径可以经过也可以不经过根节点。

两个节点之间的路径长度 由它们之间的边数表示。
 */
var longestUnivaluePath = function(root) {
    let result = 0;
    dfs(root);
    return result;

    function dfs(root) {
        if (!root) return -1;
        let left = root.left ? dfs(root.left) + 1 : 0;
        let right = root.right ? dfs(root.right) + 1 : 0;

        if (left > 0 && root.left.val != root.val) {
            left = 0;
        }
        if (right > 0 && root.right.val != root.val) {
            right = 0;
        }

        result = Math.max(left + right, result);
        return Math.max(left, right);
    }
};