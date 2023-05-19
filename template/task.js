const fs = require("fs");

function getRes(a) {
    return -1;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let [input] = fileLines[0].split(' ');
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
