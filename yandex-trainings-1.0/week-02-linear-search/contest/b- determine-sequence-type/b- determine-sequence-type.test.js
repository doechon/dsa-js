const getRes = require('./b- determine-sequence-type')

describe('tests', () => {
    test('test_c_1', () => {
        expect(getRes([-530, -530, -530])).toBe('CONSTANT');
    });
    test('test_c_2', () => {
        expect(getRes([3])).toBe('CONSTANT');
    });
    test('test_c_3', () => {
        expect(getRes([])).toBe('CONSTANT');
    });
    test('test_asc', () => {
        expect(getRes([1, 2, 3])).toBe('ASCENDING');
    });
    test('test_wa_1', () => {
        expect(getRes([1, 2, 2, 3])).toBe('WEAKLY ASCENDING');
    });
    test('test_wa_2', () => {
        expect(getRes([1, 2, 3, 3])).toBe('WEAKLY ASCENDING');
    });
    test('test_d', () => {
        expect(getRes([3, 2, 1])).toBe('DESCENDING');
    });
    test('test_wd_1', () => {
        expect(getRes([3, 2, 2, 1])).toBe('WEAKLY DESCENDING');
    });
    test('test_wd_2', () => {
        expect(getRes([3, 3, 2, 2])).toBe('WEAKLY DESCENDING');
    });
    test('test_r_1', () => {
        expect(getRes([3, 3, 5, 2])).toBe('RANDOM');
    });
    test('test_r_2', () => {
        expect(getRes([1000, 10001, 5, 2])).toBe('RANDOM');
    });
    test('test_r_3', () => {
        expect(getRes([1000, 1001, 1002, 2])).toBe('RANDOM');
    });
});