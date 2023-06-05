const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes(1,1,1,1,1)).toBe("YES");
    });
    test('test_2', () => {
        expect(getRes(2,2,2,1,1)).toBe("NO");
    });
    test('test_3', () => {
        expect(getRes(1,2,3,1,1)).toBe("NO");
    });
    test('test_4', () => {
        expect(getRes(1,2,3,2,2)).toBe("YES");
    });
    test('test_5', () => {
        expect(getRes(1,2,3,1,2)).toBe("YES");
    });
    test('test_6', () => {
        expect(getRes(1,2,3,2,3)).toBe("YES");
    });
    test('test_7', () => {
        expect(getRes(1,2,3,1,3)).toBe("YES");
    });
});