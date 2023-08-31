function getRes(arr, n) {
    let s = new Set()
    let count = 0;
    for (const [a, b] of arr) {
        if (
            a >= 0
            && b >= 0
            && n - a - 1 === b
            && !s.has(String(a) + String(b))
        ) {
            count++;
            s.add(String(a) + String(b))
        }
    }
    return count;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    const n = +fileLines[0];
    const arr = fileLines.slice(1, n + 1).map(x => x.split(' ').map(Number))
    let res = getRes(arr, n).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
