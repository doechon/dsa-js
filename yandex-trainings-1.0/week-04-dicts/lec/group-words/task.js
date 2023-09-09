// Sorted word as key
function getRes(arr) {
    const obj = {};

    for (const word of arr) {
        const sortedWord = word.split('').sort().join('')
        if (obj[sortedWord]) {
            obj[sortedWord].push(word);
        } else {
            obj[sortedWord] = [word];
        }
    }
    return Object.values(obj).join('\n');
}


if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ');
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
