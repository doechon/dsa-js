const moveZeroes = require('./move-zeros')

describe('tests', () => {
    test('test_1', () => {
        expect(moveZeroes([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0]);
    });
    test('test_2', () => {
        expect(moveZeroes([0])).toStrictEqual([0]);
    });
    test('test_3', () => {
        expect(moveZeroes([1, 2])).toStrictEqual([1, 2]);
    });
    test('test_4', () => {
        expect(moveZeroes([-4, -3, 0, 1, 2])).toStrictEqual([-4, -3, 1, 2, 0]);
    });
    test('test_5', () => {
        expect(moveZeroes([0, 0, 0])).toStrictEqual([0, 0, 0]);
    });
});