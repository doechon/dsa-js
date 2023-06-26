const replaceElements = require('./big-right-elem-replacement')

describe('tests', () => {
    test('test_1', () => {
        expect(replaceElements([17, 18, 5, 4, 6, 1])).toStrictEqual([18, 6, 6, 6, 1, -1]);
    });
    test('test_2', () => {
        expect(replaceElements([400])).toStrictEqual([-1]);
    });
    test('test_3', () => {
        expect(replaceElements([1, 2, 3])).toStrictEqual([3, 3, -1]);
    });
    test('test_4', () => {
        expect(replaceElements([3, 2, 1])).toStrictEqual([2, 1, -1]);
    });
    test('test_5', () => {
        expect(replaceElements([])).toStrictEqual([]);
    });
});