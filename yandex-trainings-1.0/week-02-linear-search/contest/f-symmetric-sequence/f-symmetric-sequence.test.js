const getRes = require('./f-symmetric-sequence')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([1, 2, 3, 4, 5, 4, 3, 2, 1])).toBe('0');
    });
    test('test_2', () => {
        expect(getRes([1, 2, 1, 2, 2])).toBe('3\n1 2 1');
    });
    test('test_3', () => {
        expect(getRes([1, 2, 3, 4, 5])).toBe('4\n4 3 2 1');
    });
    test('test_4', () => {
        expect(getRes([])).toBe('0');
    });
    test('test_5', () => {
        expect(getRes([1])).toBe('0');
    });
    test('test_6', () => {
        expect(getRes([1, 2])).toBe('1\n1');
    });
    test('test_7', () => {
        expect(getRes([2, 3, 1, 1, 3, 2])).toBe('0');
    });
    test('test_8', () => {
        expect(getRes([1, 2, 1])).toBe('0');
    });
    test('test_9', () => {
        expect(getRes([1, 2, 2, 1])).toBe('0');
    });
    test('test_10', () => {
        expect(getRes([1, 2, 2])).toBe('1\n1');
    });
});