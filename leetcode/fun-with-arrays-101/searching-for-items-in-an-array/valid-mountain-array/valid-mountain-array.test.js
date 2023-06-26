const validMountainArray = require('./valid-mountain-array')

describe('tests', () => {
    test('test_1', () => {
        expect(validMountainArray([])).toBe(false);
    });
    test('test_2', () => {
        expect(validMountainArray([2])).toBe(false);
    });
    test('test_3', () => {
        expect(validMountainArray([0, 3, 2, 1])).toBe(true);
    });
    test('test_4', () => {
        expect(validMountainArray([1, 3])).toBe(false);
    });
    test('test_5', () => {
        expect(validMountainArray([1, 3, 2])).toBe(true);
    });
    test('test_6', () => {
        expect(validMountainArray([3, 1])).toBe(false);
    });
    test('test_7', () => {
        expect(validMountainArray([0, 0, 3, 2, 1])).toBe(false);
    });
    test('test_8', () => {
        expect(validMountainArray([0, 3, 3, 2, 1])).toBe(false);
    });
    test('test_9', () => {
        expect(validMountainArray([0, 3, 2, 1, 1])).toBe(false);
    });
    test('test_10', () => {
        expect(validMountainArray([0, 1, 2, 3])).toBe(false);
    });
});