function getRes(arr) {
    let mines = arr.slice(0, 3).sort((a, b) => a - b);
    let maxes = [...mines];

    for (const el of arr.slice(3)) {
        if (el > maxes[2]) maxes = [maxes[1], maxes[2], el];
        else if (el > maxes[1]) maxes = [maxes[1], el, maxes[2]];
        else if (el > maxes[0]) maxes[0] = el;

        if (el < mines[0]) mines = [el, mines[0]];
        else if (el < mines[1]) mines[1] = el;
    }
    return (maxes[0] * maxes[1] * maxes[2] > mines[0] * mines[1] * maxes[2]) ? maxes.join(' ') : [mines[0], mines[1], maxes[2]].join(' ');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
