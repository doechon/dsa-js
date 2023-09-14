function getRes(pairs, word) {
    const dict = {};

    for (const [a, b] of pairs) {
        if (word === a) return b;
        if (word === b) return a;
    }

    return dict[word];
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let n = +fileLines[0];
    let pairs = fileLines.slice(1, n + 1).map(x => x.split(' '));
    let word = fileLines.at(n + 1);
    let res = getRes(pairs, word).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
