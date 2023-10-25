function getRes(arr, k) {
    // doesn't work for last test
    if (k <= 0) return [0, 0].join(' ')
    const treeTypeCounts = {}
    let counter = 0;
    let [leftIdx, rightIdx] = [0, 0];
    let [resLeftIdx, resRightIdx] = [0, Infinity];
    while (rightIdx < arr.length) {
        while (counter < k) {
            const curType = arr[rightIdx];
            if (!treeTypeCounts.hasOwnProperty(curType))  {
                counter++;
                treeTypeCounts[curType] = 1;
            } else {
                treeTypeCounts[curType]++;
            }
            rightIdx++;
        }
        while (counter === k && (rightIdx - leftIdx + 1) >= k) {
            const curType = arr[leftIdx];
            if (treeTypeCounts[curType] === 1) {
                counter--;
            }
            treeTypeCounts[curType]--;
            leftIdx++;
        }
        if (resRightIdx - resLeftIdx > rightIdx - leftIdx) {
            [resLeftIdx, resRightIdx] = [leftIdx, rightIdx]
        }
    }
    if (counter === k - 1 && resRightIdx - resLeftIdx > rightIdx - leftIdx) {
        [resLeftIdx, resRightIdx] = [leftIdx, rightIdx]
    }
    return [resLeftIdx, resRightIdx].join(' ');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let k = fileLines[0].split(/\s+/).map(Number)[1];
    let arr = fileLines[1].split(/\s+/).map(Number);
    let res = getRes(arr, k).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
