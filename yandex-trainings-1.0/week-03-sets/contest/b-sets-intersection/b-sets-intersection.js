function getRes(arr1, arr2) {
    const [a, b] = [arr1, arr2].map(x => new Set(x));
    return [...a].filter(x => b.has(x)).sort((a, b) => a - b).join(' ')
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let arr1 = fileLines[0].split(' ').map(Number);
    let arr2 = fileLines[1].split(' ').map(Number);
    let res = getRes(arr1, arr2).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
