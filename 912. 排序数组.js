/*
912. 排序数组
给你一个整数数组 nums，请你将该数组升序排列。
 */

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
        num[flag] = num[j];
        num[j] = num[i];
        num[i] = temp

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
            if (i >= j) {
                break;
            }

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