function validMountainArray(arr) {
    if (arr.length < 3) return false;

    let ascDirection = arr[0] < arr[1];
    if (ascDirection === false) return false;

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) return false;
        if (ascDirection && arr[i] > arr[i + 1]) {
            ascDirection = false;
            i--;
        } else if (!ascDirection && arr[i] < arr[i + 1]) {
            return false;
        }
    }
    return ascDirection !== true;
}

if (require.main === module) {

    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = validMountainArray(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = validMountainArray;
