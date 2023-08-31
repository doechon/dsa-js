function getRes(n) {
    let resArray = []
    function gen(left, right, res) {
        if (left === n && right === n) {
            resArray.push(res)
            return;
        }
        if (left < n) gen(left + 1, right, res + '(')
        if (right < left) gen(left, right + 1, res + ')')
    }
    gen(0, 0, "");
    return resArray.join('\n');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = Number(fileLines[0]);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
