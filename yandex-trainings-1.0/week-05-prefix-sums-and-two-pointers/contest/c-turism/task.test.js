const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([[1, 1], [3, 2], [5, 6], [7, 2], [10, 4], [11, 1]],
            [[5, 6], [1, 4], [4, 2]])).toBe('0\n5\n4')
    });
    test('test_2', () => {
        expect(getRes([[1, 1], [3, 2], [5, 6], [7, 2], [10, 4], [11, 1]],
            [[5, 6], [1, 4], [4, 2]])).toBe('0\n5\n4')
    });
});
