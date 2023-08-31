const heightChecker = require('./height-checker')

describe('tests', () => {
    test('test_1', () => {
        expect(heightChecker(10)).toBe(4);
    });
    test('test_2', () => {
        expect(heightChecker([1, 2])).toStrictEqual([1, 2]);
    });
});