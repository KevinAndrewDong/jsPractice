/*
226. 翻转二叉树
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 */

//迭代
var invertTree = function(root) {
    const queue = [root];
    let cur = null;
    while( cur = queue.shift()) {
        const left = cur.left;
        const right = cur.right;
        cur.left = right;
        cur.right = left;
        if (left) queue.push(left);
        if (right) queue.push(right);
    }
    return root;
};

// //递归
// var invertTree = function(root) {
//     if (!root) return root;

//     let temp = root.right;
//     root.right = root.left;
//     root.left = temp;

//     invertTree(root.left);
//     invertTree(root.right);

//     return root;
// }