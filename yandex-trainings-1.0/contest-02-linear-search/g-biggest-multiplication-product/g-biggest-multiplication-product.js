function getRes(arr) {
    let mines = arr.slice(0, 2).sort((a, b) => a - b);
    let maxes = [...mines];
    for (const el of arr.slice(2)) {
        if (el < mines[0]) mines = [el, mines[0]]; else if (el < mines[1]) mines[1] = el;
        if (el > maxes[1]) maxes = [maxes[1], el]; else if (el > maxes[0]) maxes[0] = el;
    }
    return (maxes[0] * maxes[1] > mines[0] * mines[1]) ? maxes.join(' ') : mines.join(' ');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
