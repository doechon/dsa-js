function thirdMax(arr) {
    if (arr.length === 1) return arr[0];
    let [a, b, c] = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < arr.length; i++) {
        const x = arr[i];
        if (x === a || x === b || x === c) {
            continue;
        }
        if (x > c) {
            a = b;
            b = c;
            c = x;
        } else if (x > b) {
            a = b;
            b = x;
        } else if (x > a) {
            a = x;
        }
    }
    if (a !== -Infinity) return a;
    return c;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = thirdMax(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = thirdMax;
