const removeElement = require('./remove-element')

describe('tests', () => {
    test('test_1', () => {
        expect(removeElement([3, 2, 2, 3], 3)).toBe("2\n2 2 3 3");
    });
    test('test_2', () => {
        expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe("5\n0 1 4 0 3 2 2 2");
    });
    test('test_3', () => {
        expect(removeElement([1, 0], 1)).toBe("1\n0 1");
    });
    test('test_4', () => {
        expect(removeElement([2], 2)).toBe("0\n2");
    });
    test('test_5', () => {
        expect(removeElement([0], 2)).toBe("1\n0");
    });
    test('test_6', () => {
        expect(removeElement([], 2)).toBe("0\n");
    });
    test('test_7', () => {
        expect(removeElement([3, 3], 3)).toBe("0\n3 3");
    });
});