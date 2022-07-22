/*
206. 反转链表
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 */

var reverseList = function(head) {
    // //迭代
    // let prev = null;
    // let cur = head;
    // while (cur) {
    //     let next = cur.next;
    //     cur.next = prev;
    //     prev = cur;
    //     cur = next;
    // }
    // return prev;

    //递归
    return reverse(null, head);
};

var reverse = (pre, cur) => {
    if (!cur) return pre;

    let next = cur.next;
    cur.next = pre;

    return reverse(cur, next);
}

/*
92. 反转链表 II
给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(-1);
    dummy.next = head;

    let prev = dummy;
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    let cur= prev.next;
    for (let i = 0; i < right - left; i++){
        let next = cur.next;
        //把next抓到最前面来
        cur.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return dummy.next;
};
