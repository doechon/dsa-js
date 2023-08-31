function getRes(a, b, c, d, e) {
    let combinations = [
        [a, b],
        [b, c],
        [a, c]
    ]
    for (const [x, y] of combinations) {
        if ((d >= x && e >= y) || e >= x && d >= y) {
            return "YES"
        }
    }
    return "NO";
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let [a, b, c, d, e] = fileLines.slice(0, 5).map(Number);
    let res = getRes(a, b, c, d, e).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
