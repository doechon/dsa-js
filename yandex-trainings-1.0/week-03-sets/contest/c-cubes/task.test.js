const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([1, 0, 1, 0, 1])).toBe(1);
    });
    test('test_2', () => {
        expect(getRes([1, 0, 1, 0, 3, 1, 1])).toBe(2);
    });
});