function getRes(str1, str2) {

    let lettersStr1 = {}

    for (const el of str1) {
        lettersStr1[el] = lettersStr1[el] ? ++lettersStr1[el] : 1;
    }
    for (const el of str2) {
        if (!lettersStr1.hasOwnProperty(el)) return 0;
        else {
            if (lettersStr1[el] === 0) return 0;
            lettersStr1[el]--;
        }
    }
    for (const count of Object.values(lettersStr1)) {
        if (count !== 0) return 0;
    }
    return 1;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = [fileLines[0], fileLines[1]];
    let res = getRes(...input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
