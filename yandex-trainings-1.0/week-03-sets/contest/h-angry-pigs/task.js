function getRes(arr) {
    const heights = {};

    const xCoords = new Set(arr.map(coords => coords[0]))
    return xCoords.size;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    const n = Number(fileLines[0]);
    const arr = fileLines.slice(1, n + 1).map(x => x.split(' ').map(Number));
    let res = getRes(arr).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
