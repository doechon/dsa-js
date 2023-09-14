function getRes(arr) {

    const obj = {};

    for (const arrElement of arr) {
        obj[arrElement] = (obj.hasOwnProperty(arrElement)) ? ++obj[arrElement] : 1;
    }
    return Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1] - a[1])[0][0];
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/).join(' ');
    let input = fileLines.split(/\s+/);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
