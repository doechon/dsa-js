function getRes(a, b, c, d) {

    let minArea = [];
    let minAreaSize = Infinity;

    let x;
    let y;

    const possibleCombinations = [
        [x = Math.max(a, c), y = b + d, x * y],
        [x = Math.max(a, d), y = b + c, x * y],
        [x = Math.max(b, c), y = a + d, x * y],
        [x = Math.max(b, d), y = a + c, x * y]
    ];

    for (let i = 0; i < possibleCombinations.length; i++) {
        let curAreaWidth = possibleCombinations[i][0];
        let curAreaHeight = possibleCombinations[i][1];
        let curArea = curAreaWidth * curAreaHeight;
        if (curArea < minAreaSize) {
            minArea = [curAreaHeight, curAreaWidth];
            minAreaSize = curArea;
        }
    }

    return minArea.join(" ").toString();
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let [a, b, c, d] = fileLines[0].split(' ').map(Number);
    let res = getRes(a, b, c, d)
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
