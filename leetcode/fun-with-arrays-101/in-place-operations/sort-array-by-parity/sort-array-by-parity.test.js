const sortArrayByParity = require('./sort-array-by-parity')

describe('tests', () => {
    test('test_1', () => {
        expect(sortArrayByParity([3, 1, 2, 4])).toStrictEqual([2, 4, 3, 1]);
    });
    test('test_2', () => {
        expect(sortArrayByParity([2])).toStrictEqual([2]);
    });
    test('test_3', () => {
        expect(sortArrayByParity([])).toStrictEqual([]);
    });
    test('test_4', () => {
        expect(sortArrayByParity([1, 2, 3])).toStrictEqual([2, 1, 3]);
    });
    test('test_5', () => {
        expect(sortArrayByParity([1, 3])).toStrictEqual([1, 3]);
    });
    test('test_6', () => {
        expect(sortArrayByParity([2, 4])).toStrictEqual([2, 4]);
    });
    test('test_7', () => {
        expect(sortArrayByParity([1, 3, 2])).toStrictEqual([2, 3, 1]);
    });
});