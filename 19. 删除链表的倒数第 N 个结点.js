/*
19. 删除链表的倒数第 N 个结点
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);

    let slow = dummy;
    //slow来到删除的节点前
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