function getRes(arr) {
    return -1;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
