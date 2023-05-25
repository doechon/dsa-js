const getRes = require('./g-mechanical-parts')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes(10, 5, 2)).toBe(4);
    });
    test('test_2', () => {
        expect(getRes(13, 5, 3)).toBe(3);
    });
    test('test_3', () => {
        expect(getRes(14, 5, 3)).toBe(4);
    });
    test('test_4', () => {
        expect(getRes(1, 2, 3)).toBe(0);
    });
    test('test_5', () => {
        expect(getRes(10, 2, 3)).toBe(0);
    });
    test('test_6', () => {
        expect(getRes(20, 10, 3)).toBe(6);
    });
    test('test_7', () => {
        expect(getRes(20, 20, 20)).toBe(1);
    });
    test('test_8', () => {
        expect(getRes(50, 10, 5)).toBe(10);
    });
});