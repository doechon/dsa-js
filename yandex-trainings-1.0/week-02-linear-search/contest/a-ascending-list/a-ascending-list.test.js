const isAscendingOrderList = require('./a-ascending-list')

describe('tests', () => {
    test('test_1', () => {
        expect(isAscendingOrderList([])).toBe("NO");
    });
    test('test_2', () => {
        expect(isAscendingOrderList([2])).toBe("NO");
    });
    test('test_3', () => {
        expect(isAscendingOrderList([1,2,3])).toBe("YES");
    });
    test('test_4', () => {
        expect(isAscendingOrderList([1,2,6])).toBe("YES");
    });
});