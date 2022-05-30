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



//Answer
function mergePromise (ajaxArray) {
    const data = [];
    let promise = Promise.resolve();

    ajaxArray.forEach(ajax => {
        // 第一次的then为了用来调用ajax
        // 第二次的then是为了获取ajax的结果
        promise = promise.then(ajax).then(res => {
            data.push(res);
            return data;
        })
    })
    return promise;
}
//


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