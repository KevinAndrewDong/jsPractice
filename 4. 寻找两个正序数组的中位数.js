/*
4. 寻找两个正序数组的中位数
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。
 */

var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    const left = parseInt((m + n + 1) / 2), right = parseInt((m + n + 2) / 2);

    return (findKth(nums1, 0, nums2, 0, left) + findKth(nums1, 0, nums2, 0, right)) * 0.5;
};

const findKth = function(nums1, i, nums2, j, k) {
    //num1全淘汰， 结果是nums2第k个
    if (i >= nums1.length) return nums2[j + k - 1];
    if (j >= nums2.length) return nums1[i + k - 1];
    //找第一个
    if (k === 1) return Math.min(nums1[i], nums2[j]);

    let mid1 = (i + parseInt(k / 2) - 1 < nums1.length) ? nums1[i + parseInt(k / 2) - 1] : Number.MAX_SAFE_INTEGER;
    let mid2 = (j + parseInt(k / 2) - 1 < nums2.length) ? nums2[j + parseInt(k / 2) - 1] : Number.MAX_SAFE_INTEGER;
    //nums1的前k/2个不满足题意，往后剪枝
    if (mid1 < mid2) {
        return findKth(nums1, i + parseInt(k / 2), nums2, j, k - parseInt(k / 2));
    } else {
        return findKth(nums1, i, nums2, j + parseInt(k / 2), k - parseInt(k / 2));
    }
}