//如何随机生成不重复的 10 个 100 以内的数字？

var reservoirSampling = (k, N) => {
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr[i] = i;
    }

    for (let i = k; i < N; i++) {
        let random = Math.floor(Math.random() * i);
        if (random < k) {
            arr[random] = i;
        }
    }

    return arr;
}

console.log(reservoirSampling(10, 100));