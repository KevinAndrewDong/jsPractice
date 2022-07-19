/*
2. 两数相加
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：


输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
 */

var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;
    while(l1 || l2) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        let sum = n1 + n2 + carry;

        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        carry = Math.floor(sum / 10);
    }

    if (carry > 0) {
        tail.next = new ListNode(carry);
    }

    return head;
};

/*
445. 两数相加 II
给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。



示例1：



输入：l1 = [7,2,4,3], l2 = [5,6,4]
输出：[7,8,0,7]
 */

var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let dummy = new ListNode(0);
    while(stack1.length || stack2.length) {
        let num = 0;
        num += stack1.length ? stack1.pop() : 0;
        num += stack2.length ? stack2.pop() : 0;
        num += carry;

        if (num > 9) {
            carry = 1;
            num = num % 10;
        } else {
            carry = 0;
        }

        let node = new ListNode(num);
        node.next = dummy.next;
        dummy.next = node;
    }

    if (carry) {
        let node = new ListNode(carry);
        node.next = dummy.next;
        dummy.next = node;
    }

    return dummy.next;
};