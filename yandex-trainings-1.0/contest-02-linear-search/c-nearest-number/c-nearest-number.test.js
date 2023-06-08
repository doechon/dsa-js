const getRes = require('./c-nearest-number')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([1, 2, 3, 4, 5], 6)).toBe(5);
    });
    test('test_2', () => {
        expect(getRes([5,4,3,2,1], 3)).toBe(3);
    });
    test('test_3', () => {
        expect(getRes([1,1,1,1,1], 3)).toBe(1);
    });
});