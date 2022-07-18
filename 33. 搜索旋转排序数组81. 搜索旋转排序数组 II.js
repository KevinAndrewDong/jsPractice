/*
33. 搜索旋转排序数组
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题---》二分查找
示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4


 */

var search = function(nums, target) {
    if (!nums || nums.length === 0) return -1;

    let start = 0;
    let end = nums.length -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid] === target) return mid;

        //start-mid单调递增
        if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
};

/*
81. 搜索旋转排序数组 II
已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

你必须尽可能减少整个操作步骤。
 */

var search = function(nums, target) {
    const n = nums.length;
    if (!nums || n === 0) return false;
    if (n === 1) return nums[0] === target;

    let start = 0;
    let end = nums.length -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid] === target) return true;

        //将当前二分区间的左边界加一，右边界减一，然后在新区间上继续二分查找。
        if (nums[start] === nums[mid] && nums[mid] === nums[end]) {
            start++;
            end--;
        } else if (nums[start] <= nums[mid]) {//start - mid 非降序
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {//mid - end非降序
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return false;
};