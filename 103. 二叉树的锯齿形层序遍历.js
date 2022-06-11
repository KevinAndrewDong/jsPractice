var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let ret = [];
    let queue = [root];

    let isLeftOrder = true;
    while(queue.length) {
        const len = queue.length;
        let levelList = [];

        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (isLeftOrder) {
                levelList.push(cur.val);
            } else {
                levelList.unshift(cur.val);
            }

            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }

        ret.push(levelList);
        isLeftOrder = !isLeftOrder;
    }

    return ret;
};