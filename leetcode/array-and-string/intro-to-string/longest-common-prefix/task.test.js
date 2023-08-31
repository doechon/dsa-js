const longestCommonPrefix = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });
    test('test_2', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });
    test('test_3', () => {
        expect(longestCommonPrefix(["ca", "c", "car"])).toBe("c");
    });
    test('test_4', () => {
        expect(longestCommonPrefix(["carr", "carrrrr", "car"])).toBe("car");
    });
});