/*
912. 排序数组
给你一个整数数组 nums，请你将该数组升序排列。
 */

/**
 * 快速排序的空间复杂度是多少？时间复杂度的最好最坏的情况是多少，有哪些优化方案
 *
 平均情况下快速排序的时间复杂度是Θ(𝑛lg𝑛)，最坏情况是𝑛^2，
 1当划分产生的两个子问题分别包含 n-1 和 0 个元素时，最坏情况发生。
  划分操作的时间复杂度为Θ(𝑛)，𝑇(0)=Θ(1)，
  这时算法运行时间的递归式为 𝑇(𝑛)=𝑇(𝑛−1)+𝑇(0)+Θ(𝑛)=𝑇(𝑛−1)+Θ(𝑛)，解为𝑇(𝑛)=Θ(𝑛2)。
 2当划分产生的两个子问题分别包含⌊𝑛/2⌋和⌈𝑛/2⌉−1个元素时，最好情况发生。算法运行时间递归式为 𝑇(𝑛)=2𝑇(𝑛/2)+Θ(𝑛)，解为𝑇(𝑛)=Θ(𝑛lg𝑛)。

 * 但通过随机算法可以避免最坏情况。
 * 三数中值分割法：（因为可以将序列均分为两个子序列，归并排序告诉我们，这时候是O(NlogN）
 * 计算数组的第一个，中间位置，最后一个元素的中值来代替。

 *
 *
 * 因为快排的实现是递归调用的， 而且每次函数调用中只使用了常数的空间，因此空间复杂度等于递归深度Θ(lgn)。

 */
//递归
var sortArray = function(num) {
    quickSort(num, 0, num.length - 1); // 将整个num数组快速排序，left和right分别指向数组左右两端。
    return num;
}

var quickSort = function(num, left, right) {
    if (left >= right) return; // 若左右指针相遇，即递归的终点
    var i = left, j = right, flag = left; // 定义可移动的左右指针 i，j，定义flag为基数下标。
    while (i < j) {
        while (num[j] >= num[flag] && j > flag) j--; // j不断左移，找到在num[flag]右侧且比它大的数。
        if (i >= j) break;

        while (num[i] <= num[flag] && i < j) i++;

        // ES6语法糖[num[flag],num[j],num[i]] = [num[j],num[i],num[flag]];
        let temp = num[flag];
        num[flag] = num[j];//小的往左
        num[j] = num[i];//大的往右
        num[i] = temp//flag放中间

        //flag挪到num[flag]下标i处
        flag = i;
    }
    quickSort(num, left, flag - 1); // 将flag左边数组作为待排序数组，递归调用。
    quickSort(num, flag + 1, right); // 将flag右边数组作为待排序数组，递归调用。
}



//迭代
var sortArray = function(num) {
    quickSort(num, 0, num.length - 1); // 将整个num数组快速排序，left和right分别指向数组左右两端。
    return num;
}

var quickSort = function(num, left, right) {

    var list = [[left, right]]; // 将[left,right]存入数组中，类似于递归入栈

    while (list.length > 0) {
        var now = list.pop();
        if (now[0] >= now[1]) continue;

        var i = now[0], j = now[1], flag = now[0]; // 以下与递归方法相同，请参考上面的递归详解
        while (i < j) {
            while (num[j] >= num[flag] && j > flag) j--;
            if (i >= j) break;

            while (num[i] <= num[flag] && i < j) i++;

            let temp = num[flag];
            num[flag] = num[j];
            num[j] = num[i];
            num[i] = temp;

            flag = i;
        }
        list.push([now[0], flag - 1]); // 将flag左边数组作为待排序数组，只需将左右指针放入list即可。
        list.push([flag + 1, now[1]]); // 将flag右边数组作为待排序数组，只需将左右指针放入list即可。
    }
}