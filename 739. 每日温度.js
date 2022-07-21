/*
739. 每日温度
给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。



示例 1:

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
 */

var dailyTemperatures = function(temperatures) {
    //找第一个比自己大的--单调栈
    let stack = [];
    let res = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][1]) {
            res[stack[stack.length - 1][0]] = i - stack[stack.length - 1][0];
            stack.pop();
        }
        stack.push([i, temperatures[i]]);
    }

    return res;

    // let res = [];
    // for (let i = 0; i < temperatures.length; i++) {
    //     for (let j = i; j < temperatures.length; j++) {
    //         if (temperatures[i] < temperatures[j]) {
    //             res[i] = j - i;
    //             break;
    //         } else {
    //             res[i] = 0;
    //         }
    //     }
    // }
    // return res;
};