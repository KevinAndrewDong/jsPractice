/*
232. 用栈实现队列
请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

实现 MyQueue 类：

void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false
 */

var MyQueue = function() {
    this.stack = [];
    this.helperStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let cur = null;
    //腾出来
    while (cur = this.stack.pop()) {
        this.helperStack.push(cur);
    }
    //放底下
    this.helperStack.push(x);
    //还回去
    while (cur = this.helperStack.pop()) {
        this.stack.push(cur);
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length == 0;
};