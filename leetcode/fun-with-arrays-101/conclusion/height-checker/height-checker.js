function heightChecker(arr) {
    let copyArr = [...arr]
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    let counter = 0;
    for (let i = 0; i < copyArr.length; i++) {
        if (copyArr[i] !== arr[i]) {
            counter++;
        }
    }
    return counter;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = heightChecker(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = heightChecker;
