const timeout = (ms) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });

const ajaxA = () =>
    timeout(2000).then(() => {
        console.log("A");
        return "A";
    });

const ajaxB = () =>
    timeout(1000).then(() => {
        console.log("B");
        return "B";
    });

const ajaxC = () =>
    timeout(2000).then(() => {
        console.log("C");
        return "C";
    });

const mergePromise = (fetchArray) => {
    let result = []
    let promise = Promise.resolve()
    fetchArray.forEach(function (item) {
        promise = promise.then(item)
        result.push(promise)
    })
    return Promise.all(result)

};

//测试用例
mergePromise([ajaxA, ajaxB, ajaxC]).then(
    (data) => {
        console.log("done");
        console.log(data); // data 为 [A, B, C]
    }
);

// 要求分别输出
// A
// B
// C
// done
// [A, B, C]