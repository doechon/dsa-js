const thirdMax = require('./third-maximum-number')

describe('tests', () => {
    test('test_1', () => {
        expect(thirdMax(10)).toBe(4);
    });
    test('test_2', () => {
        expect(thirdMax([1, 2])).toStrictEqual([1, 2]);
    });
});