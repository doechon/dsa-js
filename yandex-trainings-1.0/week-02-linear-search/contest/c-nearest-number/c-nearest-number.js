function getRes(arr, x) {
    let ans = arr[0];
    let ansDiff = Math.abs(x - arr[0]);
    for (const num of arr) {
        let curDiff = Math.abs(x - num);
        if (curDiff < ansDiff) {
            ans = num;
            ansDiff = curDiff;
        }
    }
    return ans;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let arr = fileLines[1].split(' ');
    let x = fileLines[2];
    let res = getRes(arr, x).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
