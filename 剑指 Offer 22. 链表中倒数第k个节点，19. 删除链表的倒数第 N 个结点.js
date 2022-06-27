/*
剑指 Offer 22. 链表中倒数第k个节点
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。



示例：

给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
 */

var getKthFromEnd = function(head, k) {
    //slow从head开始
    let slow = fast = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};

/*
19. 删除链表的倒数第 N 个结点
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    //slow从dummy开始，结束在第n个节点左边
    let slow = dummy;
    let fast = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while(fast) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};