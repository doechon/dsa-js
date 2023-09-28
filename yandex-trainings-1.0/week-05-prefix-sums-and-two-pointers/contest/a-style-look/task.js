function getRes(arr1, arr2) {
    let [ansEl1, ansEl2] = [0, 0];
    let ansDiff = Infinity;
    for (let idx1 = 0, idx2 = 0; idx1 < arr1.length; idx1++) {
        for (; idx2 < arr2.length; idx2++) {
            const [el1, el2] = [arr1[idx1],arr2[idx2]]
            if (el1 === el2) {
                return [el1, el2].join(' ')
            }
            const curDiff = Math.abs(el1 - el2)
            if (curDiff < ansDiff) {
                [ansEl1, ansEl2] = [el1, el2]
                ansDiff = curDiff;
            }

            if (el1 < el2) {
                break
            }
        }
    }
    return [ansEl1, ansEl2].join(' ');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let arr1 = fileLines[1].split(/\s+/).map(Number);
    let arr2 = fileLines[3].split(/\s+/).map(Number);
    let res = getRes(arr1, arr2).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
