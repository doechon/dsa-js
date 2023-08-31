const findDisappearedNumbers = require('./not-appeared-numbers')

describe('tests', () => {
    test('test_1', () => {
        expect(findDisappearedNumbers(10)).toBe(4);
    });
    test('test_2', () => {
        expect(findDisappearedNumbers([1, 2])).toStrictEqual([1, 2]);
    });
});