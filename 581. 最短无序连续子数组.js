/*
581. 最短无序连续子数组
给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

请你找出符合题意的 最短 子数组，并输出它的长度。



示例 1：

输入：nums = [2,6,4,8,10,9,15]
输出：5
解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 */

var findUnsortedSubarray = function(nums) {
    let max = nums[0];
    let high = 0;

    let min = nums[nums.length - 1];
    let low = 0;
    //比左边的最大值小，位置就不对
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        if (nums[i] < max) {
            high = i;
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        min = Math.min(min, nums[i]);
        if (nums[i] > min) {
            low = i;
        }
    }

    return high > low ? high - low + 1 : 0;
};