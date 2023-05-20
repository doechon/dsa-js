const getIsTriangle = require('./b-triangle')

describe('tests', () => {
    test('test_1', () => {
        expect(getIsTriangle(1, 2, 3)).toBe("NO");
    });
    test('test_2', () => {
        expect(getIsTriangle(3, 4, 2)).toBe("YES");
    });
    test('test_3', () => {
        expect(getIsTriangle(3, 2, 4)).toBe("YES");
    });
    test('test_4', () => {
        expect(getIsTriangle(4, 3, 2)).toBe("YES");
    });
    test('test_5', () => {
        expect(getIsTriangle(12, 3, 5)).toBe("NO");
    });
});