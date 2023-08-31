const strStr  = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(strStr (10)).toBe(4);
    });
    test('test_2', () => {
        expect(strStr ([1, 2])).toStrictEqual([1, 2]);
    });
});