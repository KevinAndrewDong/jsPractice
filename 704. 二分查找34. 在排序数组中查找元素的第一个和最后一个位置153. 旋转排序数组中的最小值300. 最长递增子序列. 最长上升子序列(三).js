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

/*
300. 最长递增子序列
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 */


var lengthOfLIS = function(nums) {
    let n = nums.length;
    if (n === 0) return 0;

    //d[i]所有长度为i+1的递增子序列中, 最小的那个序列尾数.
    let d = new Array(n);
    d[len] = nums[0];


    let len = 1;
    for (let i = 1; i < n; i++) {
        if (nums[i] > d[len]) {
            d[len + 1] = nums[i];
            len++;
        } else {
            //二分找nums[i]比哪一个更小,去替换
            let left = 1, right = len + 1;
            while (left < right) {
                let mid = Math.floor((right - left) / 2) + left;
                if (d[mid] < nums[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            d[left - 1 + 1] = nums[i];
        }
    }
    return len;

    // let result = 1;

    // let dp = Array(nums.length).fill(1);
    // for (let i = 0; i < nums.length; i++) {
    //     //左指针找比nums[i]小的
    //     for (let j = 0; j < i; j++) {
    //         if (nums[i] > nums[j]) {
    //             //动态规划
    //             dp[i] = Math.max(dp[i], dp[j] + 1);
    //         }
    //     }
    //     result = Math.max(result, dp[i]);
    // }
    // return result;
};

/*

最长上升子序列(三)
给定数组 arr ，设长度为 n ，输出 arr 的最长上升子序列。（如果有多个答案，请输出其中 按数值(注：区别于按单个字符的ASCII码值)进行比较的 字典序最小的那个）

要求：空间复杂度 O(n)O(n)，时间复杂度 O(nlogn)O(nlogn)
 */

/*
[0, 8, 4, 12, 2]
d = [0, 2, 12];
len = 3;
d = [1, 2, 1, 3, 1];
d[i]所有长度为i+1的递增子序列中, 最小的那个序列尾数.
p[i]存放以元素i结尾的最大递增子序列长度, 最长子序列对应的p[i] 为 1, 2, 3...
 */
var arrOfLIS = function(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    let len = 1;
    let d = new Array(n);
    d[len] = arr[0];

    let p = new Array(n);
    p[0] = 1;

    for (let i = 1; i < n; i++) {
        if (arr[i] > d[len]) {
            d[len + 1] = arr[i];
            len++;
            p[i] = len;
        } else {
            //二分找nums[i]比哪一个更小,去替换
            let left = 1, right = len + 1;
            while (left < right) {
                let mid = Math.floor((right - left) / 2) + left;
                if (d[mid] < arr[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            d[left - 1 + 1] = arr[i];
            p[i] = left - 1 + 1;
        }
    }

    //p[i]存放以元素i结尾的最大递增子序列长度
    let res = [];
    for (let i = n - 1; i >= 0; i--) {
        if (p[i] === len) {
            res[--len] = arr[i];
        }
    }
    return res;
}