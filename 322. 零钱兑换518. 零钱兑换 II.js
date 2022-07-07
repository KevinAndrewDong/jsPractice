/*
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回-1 。

你可以认为每种硬币的数量是无限的。
 */

var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    //dp[i] i元所需的最少硬币个数
    for (let i = 1; i <= amount; i++) {
        //找到所有少于i的硬币面额，动态规划
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                //i-coins[j]元需要的个数 + 1个coins[j]硬币
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

/*
给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

假设每一种面额的硬币有无限个。 

题目数据保证结果符合 32 位带符号整数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/coin-change-2
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var change = function(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            //对于面额为coin 的硬币，当coin≤i≤amount 时，如果存在一种硬币组合的金额之和等于i−coin，则在该硬币组合中增加一个面额为coin 的硬币，即可得到一种金额之和等于 i 的硬币组合。
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
};