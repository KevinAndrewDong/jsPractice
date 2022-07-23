/*
146. LRU 缓存
请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 */

/**
 * @param {number} key
 * @param {number} val
 */
    //双向链表
let List = function(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }


/**
 * @param {number} capacity
 */
//HashMap(key, List)
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.length = 0;

    this.head = null;
    this.tail = null;

    this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    //key: key, value: node
    const node = this.map.get(key);
    if (node) {
        //放末尾
        this.remove(node);
        this.insert(node.key, node.val);
        return node.val;
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.remove(this.map.get(key));
        this.insert(key, value);
    } else {
        if (this.length === this.capacity) {
            //移动头节点
            this.remove(this.head);
            this.insert(key, value);
        } else {
            this.insert(key, value);
            this.length++;
        }
    }
};

LRUCache.prototype.remove = function(node) {
    const prev = node.prev;
    const next = node.next;
    if (prev) prev.next = next;
    if (next) next.prev = prev;

    if (this.head === node) this.head = next;
    if (this.tail === node) this.tail = prev;

    this.map.delete(node.key);
}

LRUCache.prototype.insert = function(key, val) {
    const node = new List(key, val);
    //链表为空
    if (!this.tail) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    this.map.set(key, node);
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */