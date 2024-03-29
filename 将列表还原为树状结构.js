let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]

// // 迭代
// const getChildren = (data, result, pid) => {
//     for (const item of data) {
//         if (item.pid === pid) {
//             const newItem = {...item, children: []};
//             result.push(newItem);
//             getChildren(data, newItem.children, item.id);//item.id作为下一次的pid，去比较
//         }
//     }
// }
//
// /**
//  * 转换方法
//  */
// const arrayToTree = (data, pid) => {
//     const result = [];
//     getChildren(data, result, pid)
//     console.log(result);
//     return result;
// }

function arrayToTree(items, rootId) {
    const result = [];   // 存放结果集
    const itemMap = {};  //
    for (const item of items) {
        const id = item.id;
        const pid = item.pid;

        if (!itemMap[id]) {
            itemMap[id] = {
                children: [],
            }
        }

        itemMap[id] = {
            ...item,
            children: itemMap[id]['children']
        }

        const treeItem =  itemMap[id];

        if (pid === rootId) {
            result.push(treeItem);
        } else {
            if (!itemMap[pid]) {
                itemMap[pid] = {
                    children: [],
                }
            }
            itemMap[pid].children.push(treeItem)
        }

    }
    console.log(result);
    return result;
}


arrayToTree(arr, 4);