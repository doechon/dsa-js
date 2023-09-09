const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([1, 4, 2, 2, 4], [1, 4, 4, 2, 2])).toBe('NO');
    });
    test('test_2', () => {
        expect(getRes([5, 1, 2, 5, 3, 5], [5, 1, 2, 3, 5, 5])).toBe('YES');
    });
    test('test_3', () => {
        expect(getRes([4, 1, 2], [1, 4, 7])).toBe('NO');
    });
    test('test_4', () => {
        expect(getRes([7], [7])).toBe('YES');
    });
    test('test_5', () => {
        expect(getRes([4, 4, 1, 7, 5, 3, 8], [4, 1, 4, 5, 7, 3, 8])).toBe('YES');
    });
});