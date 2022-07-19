var search = function(nums, target) {
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            //找左边界
            right = mid;
        }
    }
    return left;
};

console.log(search([1,2,2,4], 2));