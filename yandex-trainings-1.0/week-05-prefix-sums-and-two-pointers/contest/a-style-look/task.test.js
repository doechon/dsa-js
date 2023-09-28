const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([1], [1])).toBe("1 1");
    });
    test('test_2', () => {
        expect(getRes([1], [2])).toBe("1 2");
    });
    test('test_3', () => {
        expect(getRes([2], [1])).toBe("2 1");
    });
    test('test_4', () => {
        expect(getRes([3, 4], [1, 2, 3])).toBe("3 3");
    });
    test('test_5', () => {
        expect(getRes([4, 5], [1, 2, 3])).toBe("4 3");
    });
    test('test_6', () => {
        expect(getRes([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe("1 1");
    });
    test('test_7', () => {
        expect(getRes([1, 8], [4, 4, 5, 6])).toBe("8 6");
    });
});