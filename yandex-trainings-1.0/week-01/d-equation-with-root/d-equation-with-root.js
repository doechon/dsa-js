function getEqSolution(a, b, c) {
    if (c < 0) {
        return "NO SOLUTION"
    } else if (c === 0) {
        if (a === 0 && b === 0) return "MANY SOLUTIONS";
        if (a === 0) return "NO SOLUTION";
        if (-b / a === -0) return 0;
        return -b / a;
    } else {
        if (c * c - b === 0 && a === 0) return "MANY SOLUTIONS";
        if (a === 0) return "NO SOLUTION";
        if ((c * c - b) / a === -0) return 0;
        return (c * c - b) / a;
    }
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let [a, b, c] = [fileLines[0], fileLines[1], fileLines[2]];
    let res = getEqSolution(Number(a), Number(b), Number(c)).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getEqSolution;
