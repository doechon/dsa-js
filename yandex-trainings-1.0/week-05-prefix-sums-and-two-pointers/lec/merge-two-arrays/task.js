function getRes(arr1, arr2) {
    let [idx1, idx2] = [0, 0];
    let res = []
    while (idx1 < arr1.length || idx2 < arr2.length) {
        if (idx1 < arr1.length && idx2 < arr2.length) {
            if (arr1[idx1] === arr2[idx2]) {
                res.push(arr1[idx1])
                res.push(arr1[idx1])
                idx1++;
                idx2++;
            } else if (arr1[idx1] < arr2[idx2]) {
                res.push(arr1[idx1])
                idx1++;
            } else {
                res.push(arr2[idx2])
                idx2++;
            }
        } else if (idx1 < arr1.length) {
            res.push(arr1[idx1])
            idx1++;
        } else {
            res.push(arr2[idx2])
            idx2++;
        }
    }

    return res;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let arr1 = fileLines[0].split(/\s+/).map(Number);
    let arr2 = fileLines[1].split(/\s+/).map(Number);
    let res = getRes(arr1, arr2).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
