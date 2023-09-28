function getResNaive(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
            const curSum = arr.slice(i, j).reduce((acc, curVal) => acc + curVal, 0)
            if (curSum === 0) {
                count++
            }
        }
    }
    return count;
}

function getResN2(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let curSum = 0;
        for (let j = i; j < arr.length; j++) {
            curSum += arr[j];
            if (curSum === 0) {
                count++;
            }
        }
    }
    return count;
}

function getRes(arr) {
    const sumsCount = {0: 1}
    let curSum = 0;
    let count = 0;
    for (const arrElement of arr) {
        curSum += arrElement;
        if (sumsCount.hasOwnProperty(curSum)) {
            count += sumsCount[curSum];
            sumsCount[curSum]++;
        } else {
            sumsCount[curSum] = 1;
        }
    }
    return count;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let input = fileLines[0].split(/\s+/).map(Number);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
