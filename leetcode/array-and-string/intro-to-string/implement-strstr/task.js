function strStr(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        for (let j = i + 1; j < haystack.length + 1; j++) {
            if (haystack.slice(i, j) === needle) return i;
        }
    }
    return -1;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = [fileLines[0], fileLines[1]];
    let res = strStr(...input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = strStr;
