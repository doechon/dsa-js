function getRes(coords, paths) {

    // build sums

    function getLeftSums(heights) {
        let res = Array.from({ length: heights.length + 1 }).fill(0);
        for (let i = 1; i < res.length; i++) {
            const curDiff = heights[i] - heights[i - 1];
            if (curDiff > 0) {
                res[i] = res[i - 1] + curDiff;
            } else {
                res[i] = res[i - 1];
            }
        }
        return res;
    }

    function getRightSums(heights) {
        let res = Array.from({ length: heights.length + 1 }).fill(0);
        for (let i = res.length - 2; i > -1; i--) {
            const curDiff = heights[i - 1] - heights[i];
            if (curDiff > 0) {
                res[i] = curDiff + res[i + 1];
            } else {
                res[i] = res[i + 1]
            }
        }
        return res;
    }

    const heigths = coords.map(x => x[1]);
    const leftSums = getLeftSums(heigths)
    const rightSums = getRightSums(heigths)
    let res = [];
    // paths as diff between sums
    for (let [startIdx, finishIdx] of paths) {
        if (startIdx < finishIdx) {
            res.push(leftSums[finishIdx - 1] - leftSums[startIdx - 1])
        } else {
            res.push(rightSums[finishIdx] - rightSums[startIdx])
        }
    }

    return res.join('\n');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let n = +fileLines[0];
    let arr = fileLines.slice(1, n + 1).map(x => x.split(/\s+/).map(Number));
    let arr2 = fileLines.slice(n + 2).map(x => x.split(/\s+/).map(Number));
    let res = getRes(arr, arr2).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
