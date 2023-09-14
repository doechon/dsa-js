function getRes(keys, taps) {

    const keyCounts = {}

    for (let i = 0; i < keys.length; i++) {
        keyCounts[i + 1] = keys[i];
    }

    for (const tap of taps) {
        keyCounts[tap]--;
    }

    const res = Object.values(keyCounts).map(x => (x < 0) ? 'YES' : 'NO')

    return res.join('\n');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let keys = fileLines[1].split(/\s+/).map(Number);
    let taps = fileLines[3].split(/\s+/).map(Number);
    let res = getRes(keys, taps).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
