/*
6个整数，表示最大24进制时间
 */

var maxTime = (arr) => {
    const N = arr.length;
    for (let i = 0; i < N; i++) {
        if (arr[i] >= 10 || arr[i] < 0) {
            return 'invalid';
        }
    }

    arr.sort((a, b) => a - b);

    let ans = '';
    for (let i = N - 1; i >= 0; i--) {
        for (let j = N - 1; j >= 0; j--) {
            //小时不超过23
            if (j === i || arr[i] >= 3 ||  (arr[i] === 2 && arr[j] >= 4) ) continue;
            for (let k = N - 1; k >= 0; k--) {
                //分钟
                if (k === j || k === i || arr[k] >= 6) continue;
                for (let l = N - 1; l >= 0; l--) {
                    if (l === k || l === j || l=== i) continue;
                    for (let m = N - 1; m >= 0; m--) {
                        if (m === l || m === k || m === j || m === i || arr[m] >= 6) continue;
                        let n = 15 - i - j - k - l - m;
                        return `${arr[i]}${arr[j]}:${arr[k]}${arr[l]}:${arr[m]}${arr[n]}`;
                    }
                }
            }
        }
    }
    return 'invalid';
}

console.log(maxTime([0,2,3,0,5,6]));
console.log(maxTime([9,9,9,9,9,9]));
console.log(maxTime([1,3,5,7,9,0]));
console.log(maxTime([5,3,4,2,8,7]));
console.log(maxTime([0,0,0,4,8,9]))

console.log(maxTime([0,0,0,0,0,0]));
console.log(maxTime([2,4,6,0,6,0]));
console.log(maxTime([0,12,4,6,63,0]));
