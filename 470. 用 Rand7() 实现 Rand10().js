/*
470. 用 Rand7() 实现 Rand10()
给定方法 rand7 可生成 [1,7] 范围内的均匀随机整数，试写一个方法 rand10 生成 [1,10] 范围内的均匀随机整数。

你只能调用 rand7() 且不能调用其他方法。请不要使用系统的 Math.random() 方法。
 */

var rand10 = function() {
    while(true) {
        var ans = (rand7() - 1) * 7 + rand7();
        if (ans <= 40) break;//[1, 40]
    }

    return (ans - 1) % 10 + 1;
};

var rand10 = function() {
    while((first = rand7()) > 2);//[1, 2]
    while ( (second = rand7())> 5);//[1, 5]
    return (first - 1) * 5 + second;//5进制
};