//例如我们有一个add函数，它可以接收string类型的参数进行拼接，也可以接收number类型的参数进行相加。


// 上边是声明
function add (arg1: string, arg2: string): string
function add (arg1: number, arg2: number): number
// 因为我们在下边有具体函数的实现，所以这里并不需要添加 declare 关键字

// 下边是实现
function add (arg1: string | number, arg2: string | number) {
    // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 arg1 + arg2
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2
    }
}


//当传入参数 para 是 User 时，不传 flag，当传入 para 是 number 时，传入 flag

interface User {
    name: string;
    age: number;
}

declare function test(para: User): number;
declare function test(para: number, flag: boolean): number;

const user = {
    name: 'Jack',
    age: 666
};

// bingo
// Error: 参数不匹配
const res = test(user, false);