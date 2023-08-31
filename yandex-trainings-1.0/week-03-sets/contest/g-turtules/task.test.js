const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([], 0)).toBe(0);
    });
    test('test_2', () => {
        expect(getRes([[0, 4], [1, 3], [2, 2], [3, 1], [4, 0]], 5)).toBe(5);
    });
    test('test_3', () => {
        expect(getRes([[0, 4], [1, 3], [2, 2], [3, 1], [4, 0]], 4)).toBe(0);
    });
    test('test_4', () => {
        expect(getRes([[0, 0]], 1)).toBe(1);
    });
    test('test_5', () => {
        expect(getRes([[]], 1)).toBe(0);
    });
    test('test_6', () => {
        expect(getRes([[9, 1], [8, 1], [7, 2], [6, 2], [5, 3], [4, 4], [3, 6], [2, 7], [1, 9], [0, 8]], 10)).toBe(4);
    });
    test('test_7', () => {
        expect(getRes([[9, 1], [7, 2], [7, 2], [6, 2], [5, 3], [4, 4], [3, 6], [2, 7], [1, 9], [0, 8]], 10)).toBe(3);
    });
    test('test_8', () => {
        expect(getRes([[0, 2], [-1, 3], [0, 0]], 3)).toBe(1);
    });
    test('test_9', () => {
        expect(getRes([[0, 2], [-1, -1], [-2, 0]], 3)).toBe(1);
    });
});