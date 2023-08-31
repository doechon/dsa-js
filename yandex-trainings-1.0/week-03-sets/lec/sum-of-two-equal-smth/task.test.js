const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes([10],1)).toStrictEqual([0,0]);
    });
    test('test_2', () => {
        expect(getRes([], 1)).toStrictEqual([0,0]);
    });
    test('test_3', () => {
        expect(getRes([1,1,1,1,1,1,0], 1)).toStrictEqual([0,1]);
    });
    test('test_4', () => {
        expect(getRes([1,1,1,1,1,1,0], 1)).toStrictEqual([0,1]);
    });
});