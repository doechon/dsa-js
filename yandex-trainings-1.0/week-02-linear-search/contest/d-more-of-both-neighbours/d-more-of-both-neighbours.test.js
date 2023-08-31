const getRes = require('./d-more-of-both-neighbours')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([1, 2, 3, 4, 5])).toBe(0);
    });
    test('test_2', () => {
        expect(getRes([])).toBe(0);
    });
    test('test_3', () => {
        expect(getRes([1])).toBe(0);
    });
    test('test_4', () => {
        expect(getRes([1, 2])).toBe(0);
    });
    test('test_5', () => {
        expect(getRes([1, 2, 3])).toBe(0);
    });
    test('test_6', () => {
        expect(getRes([1, 2, 1])).toBe(1);
    });
    test('test_7', () => {
        expect(getRes([1, 2, 3, 2, 1, 2, 3, 5, 15, 13, 12])).toBe(2);
    });
});