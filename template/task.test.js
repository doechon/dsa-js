const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes(10)).toBe(4);
    });
    test('test_2', () => {
        expect(getRes(2)).toBe(-1);
    });
});