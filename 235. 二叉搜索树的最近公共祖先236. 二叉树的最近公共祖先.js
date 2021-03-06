//235. 二叉搜索树的最近公共祖先

var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;

    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};


/*
236. 二叉树的最近公共祖先
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”


 */

var lowestCommonAncestor = function(root, p, q) {
    if (root == null || p == root || q == root) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p , q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left != null && right != null) {
        return root;
    } else if (left != null) {
        return left;
    } else if (right != null) {
        return right;
    }
    return null;
};