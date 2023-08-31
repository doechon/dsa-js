const getRes = require('./g-biggest-multiplication-product')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([3, 5, 1, 7, 9, 0, 9, -3, 10])).toBe("9 9 10");
    });
    test('test_2', () => {
        expect(getRes([-5, -30000, -12])).toBe("-30000 -12 -5");
    });
    test('test_3', () => {
        expect(getRes([1, 2, 3])).toBe("1 2 3");
    });
    test('test_4', () => {
        expect(getRes([-10, -50, 1, 25, 35, 10])).toBe("-50 -10 35");
    });
    test('test_5', () => {
        expect(getRes([1, -600, 3, 2])).toBe("1 2 3");
    });
});