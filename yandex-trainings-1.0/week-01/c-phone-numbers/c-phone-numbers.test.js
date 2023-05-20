const getIfSameNumbers = require('./c-phone-numbers')

describe('tests', () => {
    test('test_1', () => {
        expect(getIfSameNumbers("8(495)430-23-97", "+7-4-9-5-43-023-97", "4-3-0-2-3-9-7", "8-495-430"))
            .toBe("YES\nYES\nNO");
    });
    test('test_2', () => {
        expect(getIfSameNumbers("86406361642", "83341994118", "86406361642", "83341994118"))
            .toBe("NO\nYES\nNO");
    });
    test('test_2', () => {
        expect(getIfSameNumbers("+78047952807", "+78047952807", "+76147514928", "88047952807"))
            .toBe("YES\nNO\nYES");
    });
});