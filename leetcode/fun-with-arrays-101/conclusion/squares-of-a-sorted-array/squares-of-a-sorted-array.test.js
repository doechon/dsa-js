const getRes = require('./squares-of-a-sorted-array')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes(10)).toBe(4);
    });
    test('test_2', () => {
        expect(getRes([1, 2])).toStrictEqual([1, 2]);
    });
});