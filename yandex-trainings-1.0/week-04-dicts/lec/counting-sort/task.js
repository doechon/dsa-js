function getRes(arr) {
    // 5 4 5 3 2 1 5

    // 0 1 2 3 4 5
    // - 1 1 1 1 3
    const minim = Math.min(...arr);
    const maxim = Math.max(...arr);
    const k = maxim - minim + 1;

    const counts = Array.from({length: k + 1}, _ => 0);

    for (const arrElement of arr) {
        counts[arrElement]++;
    }
    return counts.reduce((acc, count, idx) => {
        return acc + (String(idx) + ' ').repeat(count);
    }, '');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
