function addBinary(strA, strB) {
    let res = ''
    const reversedA = strA.split("").reverse().join("")
    const reversedB = strB.split("").reverse().join("")
    let carry = 0;
    for (let i = 0; i < Math.max(strA.length, strB.length); i++) {
        const elA = reversedA[i] ? reversedA[i] : '0';
        const elB = reversedB[i] ? reversedB[i] : '0';
        const curSum = Number(elA) + Number(elB) + carry;
        if (curSum === 0) res = '0' + res
        else if (curSum === 1) {
            res = '1' + res
            carry = 0;z
        }
        else {
            if (curSum === 2) res = '0' + res
            else if (curSum === 3) res = '1' + res;
            carry = 1;
        }
    }
    if (carry) res = '1' + res;
    return res;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ');
    let res = addBinary(...input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = addBinary;
