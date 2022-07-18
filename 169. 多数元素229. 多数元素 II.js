/*
169. 多数元素
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

var majorityElement = function(nums) {
    let count = 1;
    let cand = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) cand= nums[i];

        if (nums[i] === cand) {
            count++;
        } else {
            count--;
        }
    }
    return cand;
};


/*
229. 多数元素 II
给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 */

var majorityElement = function (nums) {
    let cand1, cand2;
    let count1 = count2 = 0;
    let ans = [];

    //找最多的cand1, cand2
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === cand1) {
            count1++;
        } else if(nums[i] === cand2) {
            count2++;
            //前面的都消灭了，新设一个阵营
        } else if(count1 === 0) {
            cand1 = nums[i];
            count1++;
        } else if(count2 === 0) {
            cand2 = nums[i];
            count2++;
            //三个全阵亡
        }else {
            count1--;
            count2--;
        }
    }
    //判断最多的两只队伍是否符合要求
    count1 = count2 = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === cand1) count1++;
        if(nums[i] === cand2) count2++;
    }

    if(count1 > nums.length/3) ans.push(cand1);
    if(count2 > nums.length/3) ans.push(cand2);

    return ans;
}