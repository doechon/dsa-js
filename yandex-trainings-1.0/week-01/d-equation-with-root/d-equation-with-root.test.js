const getEqSolution = require('./d-equation-with-root')

describe('tests', () => {
    describe('c less than 0', () => {
        // always NO SOLUTION
        test('c less than 0. a, b are positive', () => {
            expect(getEqSolution(1, 2, -1)).toBe("NO SOLUTION");
        });
        test('c less than 0. a, b are 0', () => {
            expect(getEqSolution(0, 0, -2)).toBe("NO SOLUTION");
        });
        test('c less than 0. a, b are negative', () => {
            expect(getEqSolution(-3, -1, -3)).toBe("NO SOLUTION");
        });
        test('c less than 0. a, b are arbitrary', () => {
            expect(getEqSolution(3, -1, -3)).toBe("NO SOLUTION");
        });
    })
    describe('c equal to 0', () => {
        // first MANY SOLUTIONS if a = 0 and b = 0
        test('a b are 0', () => {
            expect(getEqSolution(0, 0, 0)).toBe("MANY SOLUTIONS");
        });
        // then NO SOLUTIONS if a = 0
        test('a is 0', () => {
            expect(getEqSolution(0, 2, 0)).toBe("NO SOLUTION");
        });
        // finally -b/a (-0 special case)
        test('b c are 0', () => {
            expect(getEqSolution(1, 0, 0)).toBe(0);
        });
        test('a b are positive', () => {
            expect(getEqSolution(1, 2, 0)).toBe(-2);
        });
        test('a is negative b is positive', () => {
            expect(getEqSolution(-1, 2, 0)).toBe(2);
        });
        test('a is positive b is negative', () => {
            expect(getEqSolution(1, -2, 0)).toBe(2);
        });
        test('a b are negative', () => {
            expect(getEqSolution(-1, -2, 0)).toBe(-2);
        });
    })
    describe('c more than 0', () => {
        // first MANY SOLUTIONS if c * c - b = 0 and a = 0
        test('c * c - b = 0 and a = 0', () => {
            expect(getEqSolution(0, 9, 3)).toBe("MANY SOLUTIONS");
        });
        // then NO SOLUTIONS if a = 0
        test('a is 0', () => {
            expect(getEqSolution(0, 3, 3)).toBe("NO SOLUTION");
        });
        // finally -b/a (-0 special case)
        test('c * c - b = 0 ', () => {
            expect(getEqSolution(1, 9, 3)).toBe(0);
        });
        test('a b positive', () => {
            expect(getEqSolution(1, 2, 3)).toBe(7);
        });
        test('a is negative b is positive', () => {
            expect(getEqSolution(-1, 2, 3)).toBe(-7);
        });
        test('a b are negative  ', () => {
            expect(getEqSolution(-1, -2, 3)).toBe(-11);
        });
        test('a is positive b is negative', () => {
            expect(getEqSolution(1, -2, 3)).toBe(11);
        });
    })
});