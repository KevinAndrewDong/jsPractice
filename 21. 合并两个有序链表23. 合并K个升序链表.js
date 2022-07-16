/*
21. 合并两个有序链表
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
*/
//递归
// var mergeTwoLists = function(list1, list2) {
//     if (list1 === null) return list2;
//     if (list2 === null) return list1;

//     if (list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list2.next, list1);
//         return list2;
//     }
// };

//迭代
var mergeTwoLists = function(l1, l2) {
  const dummpy = node = new ListNode();
  while(l1 && l2){
      if(l1.val < l2.val){
          node.next = l1;
          node = node.next;
          l1 = l1.next;
      } else {
          node.next = l2;
          node = node.next;
          l2 = l2.next;
      }
  }
  node.next = l1 || l2;
  return dummpy.next;
};

//23. 合并K个升序链表
// 给你一个链表数组，每个链表都已经按升序排列。
//
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

var mergeKLists = function(lists) {
    return mergeLists(lists, 0, lists.length - 1);
};

const mergeLists = (lists, left, right) => {
    if (left === right) return lists[left];
    if (left > right) return null;

    let mid = Math.floor((right - left) / 2) + left;
    return mergeTwoLists(mergeLists(lists, left, mid), mergeLists(lists, mid + 1, right));
}

var mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }
};

//最小堆悠闲队列
/*
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {

        if (lists.length == 0) {
            return null;
        }

        ListNode dummyHead = new ListNode(0);
        ListNode curr = dummyHead;
        PriorityQueue<ListNode> pq = new PriorityQueue<>(new Comparator<ListNode>() {
            @Override
            public int compare(ListNode o1, ListNode o2) {
                return o1.val - o2.val;
            }
        });

        for (ListNode list : lists) {
            if (list == null) {
                continue;
            }
            pq.add(list);
        }

        while (!pq.isEmpty()) {
            ListNode nextNode = pq.poll();
            curr.next = nextNode;
            curr = curr.next;
            if (nextNode.next != null) {
                pq.add(nextNode.next);
            }
        }
        return dummyHead.next;
    }
}
 */