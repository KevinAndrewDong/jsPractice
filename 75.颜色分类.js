/*
75. 颜色分类
给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

必须在不使用库的sort函数的情况下解决这个问题。
 */
var sortColors = function(nums) {
    let n = nums.length;
    let p0 = 0, p2 = n - 1;

    for (let i = 0; i < n; ++i) {
        while (i <= p2 && nums[i] == 2) {
            [nums[i], nums[p2]] = [nums[p2], nums[i]];
            p2--;
        }

        if (nums[i] == 0) {
            [nums[i], nums[p0]] = [nums[p0], nums[i]];
            p0++;
        }
    }
};