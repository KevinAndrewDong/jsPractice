var rotate = function(matrix) {
    const n = matrix.length;

    //水平翻转 matrix[i][j], matrix[n - 1 - i][j]
    for (let i = 0; i < Math.floor(n >> 1); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]];
        }
    }

    //主对角线翻转 （j < i）， matrix[i][j], matrix[j][i]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};