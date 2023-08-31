function getEqSolution(a, b, c) {
    if (c < 0) return 'NO SOLUTION';
    if (a === 0) return Math.sqrt(b) === c ? 'MANY SOLUTIONS' : 'NO SOLUTION';

    const x = (c ** 2 - b) / a;
    if (Math.round(x) !== x) return 'NO SOLUTION';

    return x;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let [a, b, c] = [fileLines[0], fileLines[1], fileLines[2]];
    let res = getEqSolution(Number(a), Number(b), Number(c)).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getEqSolution;
