function getRes(arr) {
    // find the highest peak

    let [peak, peakIdx] = [0, 0];

    for (let i = 0; i < arr.length; i++) {
        const curVal = arr[i]
        if (curVal > peak) {
            peak = curVal;
            peakIdx = i;
        }
    }
    console.log(peakIdx)
    // 3 1 4 3 5 1 1 3 1

    //             []
    //       [] x  []
    // [] x  [] [] []  x x  []
    // [] x  [] [] []  x x  []
    // [] [] [] [] [] [] [] [] []

    let [count, leftMax, rightMax] = [0, 0, 0]

    // count leftMax
    // 0 0
    // 0 3
    // 2 3
    // 2 4
    // 3 4
    // start from left to pick
    for (let i = 0; i <= peakIdx; i++) {
        const curVal = arr[i];
        if (leftMax < curVal) {
            leftMax = curVal;
        } else if (leftMax > curVal) {
            count += (leftMax - curVal)
        }
    }
    console.log(count)
    // start from right to pick
    for (let i = arr.length - 1; i >= peakIdx; i--) {
        const curVal = arr[i];
        if (rightMax < curVal) {
            rightMax = curVal;
        } else if (rightMax > curVal) {
            count += (rightMax - curVal)
        }
    }
    console.log(count)
    return count;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
