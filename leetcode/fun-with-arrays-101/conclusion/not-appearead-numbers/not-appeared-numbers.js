// function findDisappearedNumbers(arr) {
//     let allIncluded = []
//     for (let i = 1; i < arr.length + 1; i++) {
//         allIncluded.push(i);
//     }
//     const arrItems = new Set(arr);
//     allIncluded = allIncluded.filter(x => !arrItems.has(x))
//     return allIncluded;
// }


function findDisappearedNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let x = Math.abs(arr[i]);
        arr[x - 1] = -Math.abs(arr[x - 1]);
    }
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res.push(i + 1);
        }
    }
    return res;
}


if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = findDisappearedNumbers(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = findDisappearedNumbers;
