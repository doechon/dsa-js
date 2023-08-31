function getRes(str1, str2) {
    const s = new Set()
    for (let i = 0; i < str2.length - 1; i++) {
        const curPair = str2.slice(i, i + 2);
        if (!s.has(curPair)) {
            s.add(curPair)
        }
    }
    let count = 0;
    for (let i = 0; i < str1.length - 1; i++) {
        const curPair = str1.slice(i, i + 2);
        if (s.has(curPair)) {
            count++;
        }
    }
    return count;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let str1 = fileLines[0];
    let str2 = fileLines[1];
    let res = getRes(str1, str2).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
