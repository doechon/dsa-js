function getRes(rooksCoords) {

    let rows = {};
    let cols = {};

    for (const [x, y] of rooksCoords) {
        rows[x] = (rows[x]) ? rows[x] + 1:  1;
        cols[y] = (cols[y]) ? cols[y] + 1:  1;
    }
    let count = 0;
    for (const [_, rowCount] of Object.entries(rows)) {
        count += rowCount - 1
    }
    for (const [_, colCount] of Object.entries(cols)) {
        count += colCount - 1;
    }
    return count;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    const m = +fileLines[1];
    const rooksCoords = fileLines.slice(2, 1 + m + 1).map(x=>x.split(' ').map(Number));
    let res = getRes(rooksCoords).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
