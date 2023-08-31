const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes(1, 2)).toBe(3);
    });
    test('test_2', () => {
        expect(getRes(-1, 1)).toBe(0);
    });
});