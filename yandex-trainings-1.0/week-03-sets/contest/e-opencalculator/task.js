function getRes(arr, str) {
    const s1 = new Set(arr);
    const s2 = new Set(str.split(''))
    return [...s2].filter(x=>!s1.has(x)).length;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let arr = fileLines[0].split(' ');
    let str = fileLines[1];
    let res = getRes(arr, str).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
