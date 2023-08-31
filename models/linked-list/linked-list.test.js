// adopted from https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/019-Remove-Nth-Node-From-End-Of-List/remove-nth-node-from-end-of-list.test.js
const {constructLinkedList, isEqualLinkedList, ListNode} = require('./linked-list')

describe('constructLinkedList', () => {
    test('Empty items', () => {
        expect(constructLinkedList([])).toBe(null);
    });

    test('Single item', () => {
        const expected = new ListNode(1);
        const constructed = constructLinkedList([1]);
        expect(expected.val === constructed.val).toBeTruthy();
        expect(constructed.next).toBe(null);
    });

    test('Multiple items', () => {
        const expected = new ListNode(1);
        expected.next = new ListNode(2);
        expected.next.next = new ListNode(3);

        const constructed = constructLinkedList([1, 2, 3]);
        expect(constructed.val === expected.val).toBeTruthy();
        expect(constructed.next.val === expected.next.val).toBeTruthy();
        expect(constructed.next.next.val === expected.next.next.val).toBeTruthy();
        expect(constructed.next.next.next).toBe(null);
    });
});

describe('isEqualLinkedList', () => {
    test('Empty lists', () => {
        expect(isEqualLinkedList(null, null)).toBeTruthy();
    });

    test('First emtpy', () => {
        expect(isEqualLinkedList(null, new ListNode(1))).toBeFalsy();
    });

    test('Second emtpy', () => {
        expect(isEqualLinkedList(new ListNode(1), null)).toBeFalsy();
    });

    test('Equal lists', () => {
        const l1 = constructLinkedList([1, 3, 5]);
        const l2 = constructLinkedList([1, 3, 5]);
        expect(isEqualLinkedList(l1, l2)).toBeTruthy();
    });

    test('Not equal lists', () => {
        const l1 = constructLinkedList([1, 2, 5]);
        const l2 = constructLinkedList([1, 3, 5]);
        expect(isEqualLinkedList(l1, l2)).toBeFalsy();
    });

    test('First longer', () => {
        const l1 = constructLinkedList([1, 3, 5, 7]);
        const l2 = constructLinkedList([1, 3, 5]);
        expect(isEqualLinkedList(l1, l2)).toBeFalsy();
    });

    test('Second longer', () => {
        const l1 = constructLinkedList([1, 3, 5]);
        const l2 = constructLinkedList([1, 3, 5, 7]);
        expect(isEqualLinkedList(l1, l2)).toBeFalsy();
    });
});