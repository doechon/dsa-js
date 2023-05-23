const getRes = require('./e-ambulance')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes(89, 20, 41, 1, 11)).toBe("2 3");
    });
    test('test_2', () => {
        expect(getRes(11, 1, 1, 1, 1)).toBe("0 1");
    });
    test('test_3', () => {
        expect(getRes(3, 2, 2, 2, 1)).toBe("-1 -1");
    });
});