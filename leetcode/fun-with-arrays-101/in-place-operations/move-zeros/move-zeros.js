function moveZeroes(arr) {
    let zeroCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zeroCounter++;
        else arr[i - zeroCounter] = arr[i];
    }
    for (let i = 0; i < zeroCounter; i++) {
        arr[arr.length - 1 - i] = 0;
    }
    return arr;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = moveZeroes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = moveZeroes;
