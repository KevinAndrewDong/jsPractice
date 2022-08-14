/*
34. 在排序数组中查找元素的第一个和最后一个位置
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 */

var searchRange = function(nums, target) {
    let ret = [-1, -1];

    let left = 0, right = nums.length;
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            //找>=target的左边界
            right = mid;
        }
    }
    if (nums[left] !== target) return ret;
    ret[0] = left;

    right = nums.length;
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] <= target) {//找>target的左边界
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    ret[1] = right - 1;
    return ret;
};