/*
209. 长度最小的子数组
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。



示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */

var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    if (n < 1) return 0;
    //从头双指针
    let start = 0, end = 0;

    let ans = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    while (end < n) {
        sum += nums[end];

        while (sum >= target) {
            ans = Math.min(ans, end - start + 1);
            //满足条件，用start缩
            sum -= nums[start];
            start++;
        }
        //不满足条件，用end放
        end++;
    }

    return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};