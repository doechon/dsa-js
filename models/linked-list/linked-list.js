// adopted from https://github.com/zhenyi2697/leetcode-js/blob/master/models/linked-list.model.js

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const isEqualLinkedList = (l1, l2) => {
    while (l1 !== null && l2 !== null) {
        if (l1.val !== l2.val) {
            return false;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    return l1 === null && l2 === null;
};

const constructLinkedList = items => {
    const head = new ListNode(null);
    let n = head;

    items.forEach(item => {
        n.next = new ListNode(item);
        n = n.next;
    });

    return head.next;
};

const convertLinkedListToArray = head => {
    const res = []
    while (head) {
        res.push(head.val)
        head = head.next;
    }
    return res;
}

module.exports = {ListNode, isEqualLinkedList, constructLinkedList, convertLinkedListToArray}