function getRes(arr, x) {
    // a + b = x
    // if a then x - b should exist
    // a <= b <= x
    const s = new Set();
    for (const el of arr) {
        if (!s.has(el) && el <= x) {
            if (s.has(x - el)) {
                return [el, x - el].sort((a, b) => a - b);
            } else {
                s.add(el);
            }
        }
    }
    return [0, 0];
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let arr = fileLines[0].split(' ').map(Number);
    let x = +fileLines[1];
    let res = getRes(arr, x).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
