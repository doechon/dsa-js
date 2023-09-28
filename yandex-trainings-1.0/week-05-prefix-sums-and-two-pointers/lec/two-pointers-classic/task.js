function getResN2(arr, k) {
    // b - a = k
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) > k) {
                count++;
            }
        }
    }
    return count;
}

function getRes(arr, k) {
    const arrLen = arr.length;
    if (arrLen < 2) {
        return 0;
    } else if (arrLen === 2) {
        return (arr[1] - arr[0]) > k
    }
    let [l, r] = [0, 1];
    let count = 0;
    while (l < arrLen && r < arrLen) {
        if (arr[r] - arr[l] > k) {
            count += arrLen - r;
            l++;
        } else {
            r++;
        }
    }
    return count;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let nums = fileLines[0].split(/\s+/).map(Number);
    let k = +fileLines[1];
    let res = getRes(nums, k).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
