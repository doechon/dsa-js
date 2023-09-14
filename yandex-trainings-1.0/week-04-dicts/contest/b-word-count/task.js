function getRes(arr) {
    if (arr[0] === '') return '';
    const obj = {};
    let res = [];
    for (const arrElement of arr) {
        obj[arrElement] = (obj.hasOwnProperty(arrElement)) ? obj[arrElement] + 1 : 0;
        res.push(obj[arrElement])
    }
    return res.join(' ');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines.join(' ').split(/\s+/);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
