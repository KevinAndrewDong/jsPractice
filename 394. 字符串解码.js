/*
394. 字符串解码
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。


示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"
 */

var decodeString = function(s) {
    let numStack = [];
    let strStack = [];

    let num = 0;
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let item = s[i];

        if (!isNaN(item)) {//数字
            num = num * 10 + parseInt(item);
        } else if (item === '[') {//之前的的str, num 入栈
            strStack.push(result);
            result = '';

            numStack.push(num);
            num = 0;
        } else if (item === ']') {//两个都出栈，计算
            result = strStack.pop() + result.repeat(numStack.pop());
            console.log(result);
        } else {//字符
            result += item;
        }
    }

    return result;
};

console.log(decodeString('"3[a2[c]]"'))