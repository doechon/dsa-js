const reverseString = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(reverseString(10)).toBe(4);
    });
    test('test_2', () => {
        expect(reverseString([1, 2])).toStrictEqual([1, 2]);
    });
});