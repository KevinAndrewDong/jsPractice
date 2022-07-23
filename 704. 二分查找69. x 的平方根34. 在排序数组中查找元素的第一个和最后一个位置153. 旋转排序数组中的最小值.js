/*704. 二分查找
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

 */

var search = function(nums, target) {
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            //找左边界
            right = mid;
        }
    }
    return nums[left] === target ? left : -1;
};

/*
69. x 的平方根
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 */

var mySqrt = function(x) {
    let left = 0, right = x;
    while (left < right ) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left * left > x ? left - 1 : left;
};

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


/*
153. 寻找旋转排序数组中的最小值
已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 */


var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};

