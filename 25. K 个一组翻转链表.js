/*
25. K 个一组翻转链表
给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 */

var reverseKGroup = function(head, k) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let cur = head;

    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }

    //第几轮 (遇到除法'/'想到Math.floor)
    for (let i = 0; i < Math.floor(length / k); ++i) {
        for (let j = 0; j < k - 1; ++j) {//前k - 1个来翻转
            let next = cur.next;
            //翻转链表三段论
            cur.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }
        prev = cur;
        cur = cur.next;
    }

    return dummy.next;
};