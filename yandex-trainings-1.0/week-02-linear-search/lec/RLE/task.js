function getRes(str) {

    let res = '';
    let [curElem, curCount] = ['', 0]

    for (let i = 0; i < str.length + 1; i++) {
        if (curElem !== str[i]) {
            if (curCount !== 1) {
                res += curElem + curCount;
            } else {
                res += curElem
            }
            curElem = str[i];
            curCount = 1;
        } else {
            curCount++;
        }
    }

    return res.slice(1);
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0];
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
