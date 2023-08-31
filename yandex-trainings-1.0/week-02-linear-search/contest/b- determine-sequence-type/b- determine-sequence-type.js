function getRes(arr) {
    let [eqNum, ascNum, descNum] = [0, 0, 0]
    for (let i = 0; i < arr.length - 1; i++) {
        // determine type of local comparison
        // collect number of it
        let localComp = arr[i] - arr[i + 1]
        if (localComp > 0) {
            descNum++;
        } else if (localComp < 0) {
            ascNum++;
        } else eqNum++;
    }
    // with collected numbers determine type
    if (ascNum === 0 && descNum === 0) return 'CONSTANT';

    if (ascNum === 0 && eqNum !== 0) return 'WEAKLY DESCENDING';
    if (ascNum === 0 && eqNum === 0) return 'DESCENDING'

    if (descNum === 0 && eqNum !== 0) return 'WEAKLY ASCENDING';
    if (descNum === 0 && eqNum === 0) return 'ASCENDING'
    return 'RANDOM';
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let input = fileLines.slice(0, fileLines.length - 2);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
