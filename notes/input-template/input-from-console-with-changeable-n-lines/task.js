const rl = require('readline').createInterface(process.stdin);

function getRes(arr) {
    let maxCounter = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            counter++;
        } else {
            maxCounter = Math.max(maxCounter, counter)
            counter = 0;
        }
    }
    return Math.max(maxCounter, counter);
}

if (require.main === module) {

    let inputArr = [];
    let lineNumber = -1;
    let inputSize;

    rl.on('line', (line) => {
        inputArr.push(line);
        lineNumber++;
        if (lineNumber === 0) {
            inputSize = Number(line)
        } else if (lineNumber === inputSize) {
            const result = getRes(inputArr.slice(1,).map(Number));
            process.stdout.write(result.toString());
            process.exit()
        }
    });
}


module.exports = getRes;
