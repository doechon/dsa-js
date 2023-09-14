function getRes(pairs) {

    const obj = {};

    for (const [width, height] of pairs) {
        obj[width] = (obj.hasOwnProperty(width)) ? Math.max(obj[width], height) : height;
    }

    return Object.values(obj).reduce((acc, currentValue) => acc + currentValue, 0);
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let input = fileLines.slice(1).map(x => x.split(/\s+/).map(Number));
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
