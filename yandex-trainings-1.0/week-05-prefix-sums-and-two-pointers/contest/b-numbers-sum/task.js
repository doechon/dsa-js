function getRes(arr, n) {

    let sums = Array.from({length: arr.length + 1}).fill(0)

    for (let i = 1; i < arr.length + 1; i++) {
        sums[i] = arr[i - 1] + sums[i - 1]
    }

    let count = 0;

    for (let i = 0, j = 0; i < sums.length; i++) {
        for (; j < sums.length; j++) {
            const curSum = sums[j] - sums[i]
            if (curSum === n) {
                count++;
            } else if (curSum > n) {
                i++;
                j--;
            }
        }
    }

    return count;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let [_, n] = fileLines[0].split(/\s+/).map(Number);
    let arr = fileLines[1].split(/\s+/).map(Number);
    let res = getRes(arr, n).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
