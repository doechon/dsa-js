const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([1, 2, 1, 3, 2], 3)).toBe("2 4");
    });
    test('test_2', () => {
        expect(getRes([2, 4, 2, 3, 3, 1], 4)).toStrictEqual("2 6");
    });
    test('test_3', () => {
        expect(getRes([1, 1], 0)).toStrictEqual("0 0");
    });
    test('test_4', () => {
        expect(getRes([1, 1], 1)).toStrictEqual("1 1");
    });
    test('test_5', () => {
        expect(getRes([1, 1], -5)).toStrictEqual("0 0");
    });
    test('test_6', () => {
        expect(getRes([1, 2, 3, 3, 2], 3)).toStrictEqual("1 3");
    });
    test('test_7', () => {
        expect(getRes([4, 2, 6, 6, 4, 7, 5, 2], 4)).toStrictEqual("4 8");
    });
});
