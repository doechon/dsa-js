const getAirTemperature = require('./a-air-conditioner')
test('test 1', () => {
    expect(getAirTemperature(10, 20, 'heat')).toBe(20);
});

describe('tests', () => {
    test('heat', () => {
        expect(getAirTemperature(10, 20, 'heat')).toBe(20);
    });
    test('freeze', () => {
        expect(getAirTemperature(10, 20, 'freeze')).toBe(10);
    });
    test('auto', () => {
        expect(getAirTemperature(10, 20, 'auto')).toBe(20);
    });
    test('fan', () => {
        expect(getAirTemperature(10, 20, 'fan')).toBe(10);
    });
});
