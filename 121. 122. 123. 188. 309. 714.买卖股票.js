/**
 let n = prices.length;
 let sell = 0, buy = -prices[0];

 for (let i = 1; i < n; ++i) {
        sell = Math.max(sell, buy + prices[i]);
        buy = Math.max(buy, sell - prices[i]);
    }

 return sell;
 **/
/*
121. 买卖股票的最佳时机（easy）限定交易次数 k=1

122. 买卖股票的最佳时机 II（medium）交易次数无限制 k = +infinity
123. 买卖股票的最佳时机 III (hrad) 限定交易次数 k=2
188. 买卖股票的最佳时机 IV (hard) 限定交易次数 最多次数为 k
309. 最佳买卖股票时机含冷冻期(medium) 含有交易冷冻期
714. 买卖股票的最佳时机含手续费 (medium) 每次交易含手续费
第5，6道题相当于在第2道题的基础上加了冷冻期和手续费的条件。

定义状态
i: 天数
k: 交易次数，每次交易包含买入和卖出，这里我们只在买入的时候需要将 k - 1
0: 不持有股票
1: 持有股票

举例

dp[i][k][0]//第i天 还可以交易k次 手中没有股票
dp[i][k][1]//第i天 还可以交易k次 手中有股票
最终的最大收益是dp[n - 1][k][0]而不是dp[n - 1][k][1]，因为最后一天卖出肯定比持有收益更高

状态转移方程

// 今天没有持有股票，分为两种情况
// 1. dp[i - 1][k][0]，昨天没有持有，今天不操作。
// 2. dp[i - 1][k][1] + prices[i] 昨天持有，今天卖出，今天手中就没有股票了。
dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])


// 今天持有股票，分为两种情况：
// 1.dp[i - 1][k][1] 昨天持有，今天不操作
// 2.dp[i - 1][k - 1][0] - prices[i] 昨天没有持有，今天买入。
dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])

//最大利润就是这俩种情况的最大值
*/



// 121. 买卖股票的最佳时机（easy）限定交易次数 k=1
// 状态转移方程
//
//
// //第i天不持有 由 第i-1天不持有然后不操作 和 第i-1天持有然后卖出 两种情况的最大值转移过来
// dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i])
// //第i天持有 由 第i-1天持有然后不操作 和 第i-1天不持有然后买入 两种情况的最大值转移过来
// dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i])
//     = Math.max(dp[i - 1][1][1], -prices[i]) // k=0时 没有交易次数，dp[i - 1][0][0] = 0
// k是固定值1，不影响结果，所以可以不用管，简化之后如下
//
//
// dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
// dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
// 完整代码


//时间复杂度O(n) 空间复杂度O(n)，dp数组第二维是常数
const maxProfit = function (prices) {
    let n = prices.length;
    let dp = Array.from(new Array(n), () => new Array(2));
    dp[0][0] = 0; //第0天不持有
    dp[0][1] = -prices[0]; //第0天持有
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    return dp[n - 1][0];
};


//状态压缩，dp[i] 只和 dp[i - 1] 有关，去掉一维


//时间复杂度O(n) 空间复杂度O(1)
const maxProfit = function (prices) {
    let n = prices.length;
    let dp = Array.from(new Array(n), () => new Array(2));
    dp[0] = 0;
    dp[1] = -prices[0];
    for (let i = 1; i < n; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i]);
        dp[1] = Math.max(dp[1], -prices[i]);
    }
    return dp[0];
};

//语意化
const maxProfit = function (prices) {
    let n = prices.length;
    let sell = 0;
    let buy = -prices[0];
    for (let i = 1; i < n; i++) {
        sell = Math.max(sell, buy + prices[i]);
        buy = Math.max(buy, -prices[i]);
    }
    return sell;
};




// 122. 买卖股票的最佳时机 II（medium）交易次数无限制 k = +infinity
// 状态转移方程
//
//
// //第i天不持有 由 第i-1天不持有然后不操作 和 第i-1天持有然后卖出 两种情况的最大值转移过来
// dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
// //第i天持有 由 第i-1天持有然后不操作 和 第i-1天不持有然后买入 两种情况的最大值转移过来
// dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
// k同样不影响结果，简化之后如下
//
//
// dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
// dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
// 完整代码


const maxProfit = function (prices) {
    let n = prices.length;
    let dp = Array.from(new Array(n), () => new Array(2));
    dp[0][0] = 0; //第0天不持有
    dp[0][1] = -prices[0]; //第0天买入 花了prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[n - 1][0];
};

//状态压缩，同样dp[i] 只和 dp[i - 1] 有关，去掉一维


const maxProfit = function (prices) {
    let n = prices.length;
    let dp = Array.from(new Array(n), () => new Array(2));
    dp[0] = 0;
    dp[1] = -prices[0];
    for (let i = 1; i < n; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i]);
        dp[1] = Math.max(dp[1], dp[0] - prices[i]);
    }
    return dp[0];
};

//语意化
const maxProfit = function (prices) {
    let n = prices.length;
    let sell = 0;
    let buy = -prices[0];
    for (let i = 1; i < n; i++) {
        sell = Math.max(sell, buy + prices[i]);
        buy = Math.max(buy, sell - prices[i]);
    }
    return sell;
};





// 123. 买卖股票的最佳时机 III (hrad) 限定交易次数 k=2
// 状态转移方程
//
//
// dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
// dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
// k对结果有影响 不能舍去，只能对k进行循环
//
//
// for (let i = 0; i < n; i++) {
//     for (let k = maxK; k >= 1; k--) {
//         dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
//         dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
//     }
// }
//
//
// //k=2，直接写出循环的结果
// dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i])
// dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i])
//
// dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i])
// dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i])
//     = Math.max(dp[i - 1][1][1], -prices[i])// k=0时 没有交易次数，dp[i - 1][0][0] = 0
//
// //去掉i这一维度
// dp[2][0] = Math.max(dp[2][0], dp[2][1] + prices[i])
// dp[2][1] = Math.max(dp[2][1], dp[1][0] - prices[i])
//
// dp[1][0] = Math.max(dp[1][0], dp[1][1] + prices[i])
// dp[1][1] = Math.max(dp[1][1], dp[0][0] - prices[i])
//     = Math.max(dp[1][1], -prices[i])// k=0时 没有交易次数，dp[i - 1][0][0] = 0
//
// 完整代码


//和前面一样 我们直接降维
const maxProfit = function (prices) {
    let buy_1 = -prices[0], sell_1 = 0
    let buy_2 = -prices[0], sell_2 = 0
    let n = prices.length
    for (let i = 1; i < n; i++) {
        sell_2 = Math.max(sell_2, buy_2 + prices[i])
        buy_2 = Math.max(buy_2, sell_1 - prices[i])
        sell_1 = Math.max(sell_1, buy_1 + prices[i])
        buy_1 = Math.max(buy_1, -prices[i])
    }
    return sell_2
}





// 188. 买卖股票的最佳时机 IV (hard) 限定交易次数 最多次数为 k

const maxProfit = function (k, prices) {
    let n = prices.length;
    let profit = new Array(k);//和123题一样 求出所有k的状态
    // 初始化k次交易买入卖出的利润
    for (let j = 0; j <= k; j++) {
        profit[j] = {
            buy: -prices[0],//表示有股票
            sell: 0,//表示没有股票
        };
    }
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            //122题可以交易无数次，188交易k次，所以直接在加一层k循环就可以
            //122最后的递推方程：
            //sell = Math.max(sell, buy + prices[i]);
            //buy = Math.max(buy, -prices[i]);
            profit[j] = {
                sell: Math.max(profit[j].sell, profit[j].buy + prices[i]),
                buy: Math.max(profit[j].buy, profit[j - 1].sell - prices[i]),
            };
        }
    }
    return profit[k].sell; //返回第k次清空手中的股票之后的最大利润
};





// 309. 最佳买卖股票时机含冷冻期(medium) 含有交易冷冻期
// 状态转移方程
//
//
// dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
// //冷却时间1天，所以要从 i - 2 天转移状态
// //买入，卖出 ---- 冷冻期 ----  买入，卖出
// dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 2][k - 1][0] - prices[i])
// 题目不限制k的大小，可以舍去
//
//
// dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
// dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
//
// //降维i
// dp[0] = Math.max(dp[0], dp[1] + prices[i])
// dp[1] = Math.max(dp[1], profit_freeze - prices[i])
// 完整代码


const maxProfit = function (prices) {
    let n = prices.length;
    let buy = -prices[0];//手中有股票
    let sell = 0;//没有股票
    let profit_freeze = 0;
    for (let i = 1; i < n; i++) {
        let temp = sell;
        sell = Math.max(sell, buy + prices[i]);
        buy = Math.max(buy, profit_freeze - prices[i]);
        profit_freeze = temp;
    }
    return sell;
};






// 714. 买卖股票的最佳时机含手续费 (medium) 每次交易含手续费
// 状态转移方程
//
//
// //每次交易要支付手续费 我们定义在卖出的时候扣手续费
// dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
// dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i])
//
// 完整代码


const maxProfit = function (prices, fee) {
    let sell = 0;//卖出
    let buy = -prices[0];//买入
    for (let i = 1; i < prices.length; i++) {
        sell = Math.max(sell, buy + prices[i] - fee);
        buy = Math.max(buy, sell - prices[i]);
    }
    return sell;
};