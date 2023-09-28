function getRes(arr) {
    arr = arr.sort((a, b) => a - b);
    let bestSum = 0;
    let nowSum = 0;
    let last = 0;
    for (let first = 0; first < arr.length; first++) {
        while (last < arr.length && (last === first || (arr[first] + arr[first + 1] >= arr[last]))) {
            nowSum += arr[last];
            last++;
        }
        bestSum = Math.max(bestSum, nowSum);
        nowSum -= arr[first]
    }
    return bestSum;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let input = fileLines[0].split(/\s+/).map(Number);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
