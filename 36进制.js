/*
504. 七进制数
给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。
 */

var convertToBase7 = function(num) {
    if (num === 0) return "0";
    
    let negative = num < 0;
    num = Math.abs(num);
    
    let digits = [];
    while (num > 0) {
        digits.push(num % 7);
        num = Math.floor(num / 7);
    }
    
    if (negative) digits.push('-');
    
    return digits.reverse().join('');
};

//实现36进制转换
function convertToBase36(n) {
    let digits = [];
    let index = 0;
    while(n > 0) {
        n = n / Math.pow(36, index);
        index++;

        let cur = n % Math.pow(36, index);
        n = n - cur;
        if (cur < 10) {
            digits.push(cur);
        } else {
            digits.push(String.fromCharCode(cur - 10 + 'a'.charCodeAt()))
        }
    }
    return digits.reverse().join('');
}