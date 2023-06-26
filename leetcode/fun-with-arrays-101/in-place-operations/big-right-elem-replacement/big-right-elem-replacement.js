function replaceElements(arr) {
    let curMax = -1;
    for (let i = arr.length - 1; i > -1; i--) {
        let temp = arr[i];
        arr[i] = curMax;
        curMax = Math.max(temp, curMax);
    }
    return arr;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = replaceElements(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = replaceElements;
