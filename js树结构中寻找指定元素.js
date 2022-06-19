const data = { // 模拟的antd的树结构数据，以ID作为唯一指定值
    key: '1',
    id: 'asascascasc',
    children: [
        {
            key: '1.1',
            id: 'asvasvgasf',
            children: [
                {
                    key: '1.1.1',
                    id: '8888',
                    children: [],
                },
                {
                    key: '1.1.2',
                    id: '341243',
                    children: [{
                        key: '1.1.2.1',
                        id: 'sdarqafascavf',
                        children: [],
                    },],
                },
            ],
        },
        {
            key: '1.2',
            id: 'vassfafdasfcac',
            children: []
        },
        {
            key: '1.3',
            id: 'cavcasfra',
            children: []
        },
        {
            key: '1.4',
            id: 'casfraracdacs',
            children: [
                {
                    key: '1.1.2',
                    id: '3412431',
                    children: [{
                        key: '1.1.2.1',
                        id: 'sdarqafascavf1',
                        children: [],
                    },],
                },
                {
                    key: '1.1.2',
                    id: '3412432',
                    children: [{
                        key: '1.1.2.1',
                        id: 'sdarqafascavf2',
                        children: [],
                    },],
                },
                {
                    key: '1.1.2',
                    id: '3412433',
                    children: [{
                        key: '1.1.2.1',
                        id: 'sdarqafascavf3',
                        children: [],
                    },],
                },
            ]
        },
    ],
}


const getPosByIdInTree = (tree, id) => {
    const tmp = [] // 路径数组
    if(tree.id === id) {return [0]}//根节点

    const FindPos = (sourceTree, sourceId) => {
        if (!sourceTree.children) {
            return; // 为末端节点
        }
        sourceTree.children.forEach((item, index) => {
            if (item.id === sourceId) {// 寻找到指定的元素节点
                tmp.push(index);
                FindPos(tree, sourceTree.id) // sourceTree.id是上层元素的id
            } else {// 当前继续寻找别的子项
                FindPos(item, sourceId)
            }
        })
    }

    FindPos(tree, id);
    return tmp.reverse()
}



const source = 'asvasvgasf'
const pos = getPosByIdInTree(data, source)
console.log( pos);// [3, 2, 0] 不算根节点，测试通过



