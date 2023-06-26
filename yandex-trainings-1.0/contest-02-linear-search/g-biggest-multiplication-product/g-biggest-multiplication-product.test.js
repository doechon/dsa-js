const getRes = require('./g-biggest-multiplication-product')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([4, 3, 5, 2, 5])).toBe("5 5");
    });
    test('test_2', () => {
        expect(getRes([-4, 3, -5, 2, 5])).toBe("-5 -4");
    });
});