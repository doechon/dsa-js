const getRes = require('./f-laptops-arrangment')

describe('tests', () => {
    test('test_1', () => {
        expect(["20 2", "2 20", "4 10", "10 4"]).toContain(getRes(10, 2, 2, 10));
    });
    test('test_2', () => {
        expect(["9 5", "5 9"]).toContain(getRes(5, 7, 3, 2));
    });
    test('test_3', () => {
        expect(["4 2", "2 4"]).toContain(getRes(1, 2, 2, 3));
    });
    test('test_4', () => {
        expect(["4 2", "2 4"]).toContain(getRes(2, 2, 2, 2));
    });
});