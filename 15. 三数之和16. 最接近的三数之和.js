/*
15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。



示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
 */

var threeSum = function(nums) {
    const n = nums.length;

    nums.sort((a, b) => a - b);

    let res = [];
    for (let k = 0; k < n; k++) {
        //k是最左边指针 剪枝
        if (nums[k] > 0) break;
        //去重
        if (k > 0 && nums[k] == nums[k - 1]) continue;

        let i = k + 1;
        let j = n - 1;
        while (i < j) {
            let sum = nums[k] + nums[i] + nums[j];
            if (sum === 0) {
                res.push([nums[k], nums[i], nums[j]]);
                //预防性去重
                while(nums[i] === nums[i + 1]) {i++};
                while(nums[j] === nums[j - 1]) {j--};
                i++;
                j--;
            } else if (sum < 0) {
                i++;
            } else {
                j--;
            }
        }
    }
    return res;
};

/*
16. 最接近的三数之和
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。


示例 1：

输入：nums = [-1,2,1,-4], target = 1
输出：2
 */

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;


        while (left < right) {
            let threeSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(threeSum - target) < Math.abs(closestSum - target)) {
                closestSum = threeSum;
            }

            if (threeSum < target) {
                left++;
            } else if (threeSum > target) {
                right--;
            } else {
                return target;
            }
        }
    }
    return closestSum;
};