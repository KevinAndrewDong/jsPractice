//中

var inorderTraversal = function(root) {
    //迭代
    let stack = [];
    let ret = [];
    let cur = root;

    while(stack.length || cur) {
        while(cur) {
            stack.push(cur);
            cur = cur.left;
        }

        cur = stack.pop();
        ret.push(cur.val);
        cur = cur.right;
    }
    return ret;
    // //递归
    // let ret = [];
    // function inorder(node) {
    //     if (!node) return ;
    //     inorder(node.left);
    //     ret.push(node.val);
    //     inorder(node.right);
    // }
    // inorder(root);
    // return ret;
};

//前
var preorderTraversal = function(root) {
    if (!root) return [];
    let stack = [root];
    let ret = [];
    while (stack.length) {
        const cur= stack.pop();
        ret.push(cur.val);
        //先右再左压入栈中，出栈时先左节点再右节点
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return ret;
    // //递归
    // let ret = [];
    // function preorder(root) {
    //     if (!root) return;
    //     ret.push(root.val);
    //     preorder(root.left);
    //     preorder(root.right);
    // }
    // preorder(root);
    // return ret;
};


//后

var postorderTraversal = function(root) {
    //迭代
    if (!root) return [];
    let stack = [root];
    let ret = [];
    while (stack.length) {
        const cur = stack.pop();
        //根结点放末尾
        ret.unshift(cur.val);
        //接着是右节点，最后是左节点。实现左-右-中的顺序
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
    }
    return ret;


    //循环
    // let ret = [];
    // function postorder(node) {
    //     if (!node) return ;
    //     postorder(node.left);
    //     postorder(node.right);
    //     ret.push(node.val);
    // }
    // postorder(root);
    // return ret;
};


//层
var levelOrder = function(root) {
    //迭代
    if (!root) return [];

    let queue = [root];
    let ret = [];
    let level = 0;

    while(queue.length) {
        ret.push([]);

        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            ret[level].push(cur.val);

            //queue先左后右
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        level++;
    }
    return ret;

    //递归
    // let ret = [];

    // function levelorder(node, level) {
    //     if (!node) return ;

    //     ret[level] = ret[level] || [];
    //     ret[level].push(node.val);

    //     levelorder(node.left, level + 1);
    //     levelorder(node.right, level + 1);
    // }

    // levelorder(root, 0);
    // return ret;
};


var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let ret = [];
    let queue = [root];
    let isLeftOrder = true;

    while(queue.length) {
        let levelList = [];

        const len = queue.length;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();

            if (isLeftOrder) {
                levelList.push(cur.val);
            } else {
                //反向
                levelList.unshift(cur.val);
            }

            //queue先左后右
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        ret.push(levelList);
        isLeftOrder = !isLeftOrder;
    }

    return ret;
};