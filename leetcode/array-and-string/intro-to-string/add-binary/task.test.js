const addBinary = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(addBinary('11', '1')).toBe('100');
    });
    test('test_2', () => {
        expect(addBinary('1010', '1011')).toBe("10101");
    });
});