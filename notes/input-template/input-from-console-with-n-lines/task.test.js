const getRes = require('./task')

describe('tests', () => {
    test('test_1', () => {
        expect(getRes('ab', 'aabbccd')).toBe(4);
    });
});