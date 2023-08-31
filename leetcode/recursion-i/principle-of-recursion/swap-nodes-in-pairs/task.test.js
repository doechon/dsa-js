const swapPairs = require('./task');
const {constructLinkedList, isEqualLinkedList} = require("../../../../models/linked-list/linked-list");

describe('tests', () => {
    test('test_1', () => {
        const input = constructLinkedList([1, 2, 3, 4]);
        const result = swapPairs(input);
        const expected = constructLinkedList([2, 1, 4, 3]);
        expect(isEqualLinkedList(expected, result)).toBeTruthy();
    });
    test('test_2', () => {
        const input = constructLinkedList([]);
        const result = swapPairs(input);
        const expected = constructLinkedList([]);
        expect(isEqualLinkedList(expected, result)).toBeTruthy();
    });
    test('test_3', () => {
        const input = constructLinkedList([1]);
        const result = swapPairs(input);
        const expected = constructLinkedList([1]);
        expect(isEqualLinkedList(expected, result)).toBeTruthy();
    });
    test('test_4', () => {
        const input = constructLinkedList([1, 2, 3]);
        const result = swapPairs(input);
        const expected = constructLinkedList([2, 1, 3]);
        expect(isEqualLinkedList(expected, result)).toBeTruthy();
    });
});