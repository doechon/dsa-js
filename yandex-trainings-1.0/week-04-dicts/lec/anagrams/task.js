function getRes(str1, str2) {
    const obj1 = {}
    const obj2 = {}

    str1.split('').forEach((x) => obj1[x] = (obj1[x]) ? obj1[x]++ : 1)
    str2.split('').forEach((x) => obj2[x] = (obj2[x]) ? obj2[x]++ : 1)

    const keys = new Set(Object.keys(obj1).concat(Object.keys(obj2)));

    for (const key of keys) {
        if (obj1[key] !== obj2[key] || !obj1.hasOwnProperty(key) || !obj2.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let res = getRes(fileLines[0], fileLines[1]).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
