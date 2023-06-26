const removeDuplicates = require('./remove-duplicates-from-sorted-array')

describe('tests', () => {
    test('test_1', () => {
        expect(removeDuplicates([])).toBe(0);
    });
    test('test_2', () => {
        expect(removeDuplicates([2])).toStrictEqual([1, [2]]);
    });
    test('test_3', () => {
        expect(removeDuplicates([1, 2, 2])).toStrictEqual([2, [1, 2, 2]]);
    });
    test('test_4', () => {
        expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
            .toStrictEqual([5, [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]]);
    });
    test('test_5', () => {
        expect(removeDuplicates([1, 1, 1, 1, 1, 1])).toStrictEqual([1, [1, 1, 1, 1, 1, 1]]);
    });
    test('test_6', () => {
        expect(removeDuplicates([-5, -3, 0, 0, 0, 1, 1, 1, 2]))
            .toStrictEqual([5, [-5, -3, 0, 1, 2, 1, 1, 1, 2]]);
    });
});