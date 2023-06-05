function getIsTriangle(a, b, c) {
    return (a + b > c && b + c > a && c + a > b) ? "YES" : "NO";
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let [a, b, c] = [fileLines[0], fileLines[1], fileLines[2]];
    let res = getIsTriangle(Number(a), Number(b), Number(c)).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getIsTriangle;
