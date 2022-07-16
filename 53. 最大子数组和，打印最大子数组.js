/*
53. 最大子数组和
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    const dp = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i];
        } else {
            dp[i] = nums[i];
        }

        res = Math.max(res, dp[i]);
    }

    return res;
};

/* 打印最大子数组

 */
var maxSubArray = function(nums) {
    const dp = [nums[0]];
    let start = 0, len = 1;

    let maxStart = 0, maxLen = 0, maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i];
            len++;
        } else {
            dp[i] = nums[i];
            start = i;
            len = 1;
        }

        //增加更新start,len
        if (dp[i] > maxSum) {
            maxStart = start;
            maxLen = len;
            maxSum = dp[i];
        }
    }
    return nums.slice(maxStart, maxStart + maxLen );
};