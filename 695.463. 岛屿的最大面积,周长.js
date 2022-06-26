/* 695. 岛屿的最大面积
给你一个大小为 m x n 的二进制矩阵 grid 。

岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

岛屿的面积是岛上值为 1 的单元格的数目。

计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

 */

var maxAreaOfIsland = function(grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let surface = area(grid, i, j);
                res = Math.max(res, surface);
            }
        }
    }
    return res;
};

const area = (grid, row, col) => {
    if (!inArea(grid, row, col)) return 0;
    if (grid[row][col] !== 1) return 0;

    grid[row][col] = 2;

    return 1 + area(grid, row - 1, col) + area(grid, row + 1, col)
        + area(grid, row, col - 1) + area(grid, row, col + 1);
}

const inArea = (grid, row, col) => {
    return row >= 0 && row < grid.length
        && col >= 0 && col < grid[0].length;
}

/*
463. 岛屿的周长
给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

 */

var islandPerimeter = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                return area(grid, i , j);
            }
        }
    }
    return 0;
};

const area = (grid, row, col) => {
    if (!inArea(grid, row, col)) return 1;
    if (grid[row][col] === 0) return 1;

    if (grid[row][col] === 2) return 0;

    grid[row][col] = 2;

    return area(grid, row - 1, col) + area(grid, row + 1, col)
        + area(grid, row, col - 1) + area(grid, row, col + 1);
}

const inArea = (grid, row, col) => {
    return row >= 0 && row < grid.length
        && col >= 0 && col < grid[0].length;
}
