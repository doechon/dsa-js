function sortArrayByParity(arr) {
    let counterOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            counterOdd++;
        } else if (counterOdd !== 0 && arr[i] % 2 === 0) {
            [arr[i - counterOdd], arr[i]] = [arr[i], arr[i - counterOdd]]
        }
    }
    return arr;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = sortArrayByParity(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = sortArrayByParity;
