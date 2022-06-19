const data = [
    {
        "id": "1",
        "children": [
            {
                "id": "2",
                "children": [
                    {
                        "id": "3",
                        "children": null
                    },
                    {
                        "id": "4",
                        "children": [
                            {
                                "id": "6",
                                "children": null
                            }
                        ]
                    },
                    {
                        "id": "5",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "id": "7",
        "children": [
            {
                "id": "8",
                "children": [
                    {
                        "id": "9",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "id": "10",
        "children": null
    }
]

//  tree：树结构；value： 对应节点；path：每次保存相应路径的字符串
function getChidlren(tree, value, path) {
    for (var i = 0; i < tree.length; i++) {
        var tempPath = [...path]
        tempPath.push(tree[i].id)
        if (tree[i].id === value) {
            console.log(tempPath);
            return tempPath
        } else if (tree[i].children) {
            getChidlren(tree[i].children, value, tempPath)
        }

    }
}

getChidlren(data, '4', [])
