/*
215. 数组中的第K个最大元素
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。


 */

var findKthLargest = function(nums, k) {
    //找排序后下标为n-k的
    let target = nums.length - k;

    let start = 0, end = nums.length - 1;
    let index = partition(nums, start, end);

    while (index !== target) {
        if (index < target) {
            start = index + 1;
        } else {
            end = index - 1;
        }

        index = partition(nums, start, end);
    }

    return nums[index];
};

//快排
var partition = (nums, start, end) => {
    let mid = Math.floor(Math.random() * (end - start + 1) + start);
    [nums[mid], nums[end]] = [nums[end], nums[mid]];

    let small = start - 1;
    for (let i = start; i < end; i++) {
        if (nums[i] < nums[end]) {
            small++;
            [nums[small], nums[i]] = [nums[i], nums[small]];
        }
    }
    small++;
    [nums[small], nums[end]] = [nums[end], nums[small]];

    return small;
}