function getRes(arr1, arr2) {

    const [a, b] = [arr1, arr2].map(x => new Set(x));
    const intersection = [...a].filter(x => b.has(x)).sort((a, b) => (a - b));
    const uniqueOfA = [...a].filter(x => !b.has(x)).sort((a, b) => (a - b));
    const uniqueOfB = [...b].filter(x => !a.has(x)).sort((a, b) => (a - b));

    return `${intersection.length}\n${intersection.join(' ')}\n${uniqueOfA.length}\n${uniqueOfA.join(' ')}\n${uniqueOfB.length}\n${uniqueOfB.join(' ')}`;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let [n, m] = fileLines[0].split(' ').map(Number);

    const [arr1, arr2] = [fileLines.slice(1, n + 1), fileLines.slice(n + 1)]

    let res = getRes(arr1, arr2).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
