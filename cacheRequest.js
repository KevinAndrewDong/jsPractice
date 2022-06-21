// 请实现一个cacheRequest方法，保证当前ajax请求相同资源时，真实网络层中，实际只发出一次请求（假设已经存在request方法用于封装ajax请求）

// 构建Map，用作缓存数据
const dict = new Map()
// 这里简单的把url作为cacheKey
const cacheRquest = (url) => {
    if (dict.has(url)) {
        return Promise.resolve(dict.get(url))
    } else {
        // 无缓存，发起真实请求，成功后写入缓存
        return request(url).then(res => {
            dict.set(url, res)
            return res
        }).catch(err => Promise.reject(err))
    }
}


const request = (url, option) =>
    new Promise((res) => {
        setTimeout(() => {
            res({ data: option });
        }, 2000);
    });

const cache = new Map();
const cacheRequest = (url, option) => {
    let key = `${url}:${option.method}`;

    if (cache.has(key)) {
        if (cache.get(key).status === "pending") {
            return cache.get(key).myWait;
        }
        return Promise.resolve(cache.get(key).data);
    } else {
        // 无缓存，发起真实请求
        let requestApi = request(url, option);
        cache.set(key, { status: "pending", myWait: requestApi });

        return requestApi
            .then((res) => {
                // console.log(cache)
                cache.set(key, { status: "success", data: res });
                // console.log(cache)
                return Promise.resolve(res);
            })
            .catch((err) => {
                cache.set(key, { status: "fail", data: err });
                Promise.reject(err);
            });
    }
};