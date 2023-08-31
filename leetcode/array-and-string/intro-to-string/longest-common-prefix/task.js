function longestCommonPrefix(arr) {

    let shortestWord = arr.reduce((a, b) => a.length <= b.length ? a : b);

    let curLCP = "";

    for (let i = 1; i < shortestWord.length + 1; i++) {
        for (const arrElement of arr) {
            if (arrElement !== shortestWord && arrElement.slice(0, i) !== shortestWord.slice(0, i)) {
                return curLCP;
            }
        }
        curLCP = shortestWord.slice(0, i);
    }

    return curLCP;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ');
    let res = longestCommonPrefix(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = longestCommonPrefix;
