
const nums = [2,2,-9,-1,2,1,-5,1];

var maxSubArray = function(nums) {
    let maxStart = 0, maxLen = 0, maxSum = nums[0];
    const dp = [nums[0]];
    let start = 0, len = 1;

    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i];
            len++;
        } else {
            dp[i] = nums[i];
            start = i;
            len = 1;
        }

        if (dp[i] > maxSum) {
            maxStart = start;
            maxLen = len;
            maxSum = dp[i];
        }
    }
    return nums.slice(maxStart, maxStart + maxLen );
};
