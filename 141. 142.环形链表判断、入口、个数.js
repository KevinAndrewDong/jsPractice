//141. 环形链表
// 给你一个链表的头节点 head ，判断链表中是否有环。

var hasCycle = function(head) {
    if (head === null || head.next === null) return false;

    let slow = head, fast = head;
    while (true) {
        if (fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }
    return true;
};

//142. 环形链表 II
// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

var detectCycle = function(head) {
    if (head === null || head.next === null) return null;

    let slow = head, fast = head;
    while (true) {
        if (fast === null || fast.next === null) return null;
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    let ptr = head;
    while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
    }

    return ptr;
};

//环中节点的个数

var detectCycle = function(head) {
    if (head === null || head.next === null) return null;

    let slow = head, fast = head;
    while (true) {
        if (fast === null || fast.next === null) return null;
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    let ptr = head;
    while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
    }

    let count = 0;
    while (ptr.next !== slow) {
        count++;
        ptr = ptr.next;
    }

    return count;
};