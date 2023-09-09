function getRes(str) {
    const obj = {}
    str.split('').forEach((x) => obj[x] = (obj[x]) ? obj[x] + 1 : 1)
    let maxCount = Math.max(...Object.values(obj));
    let ans = ""
    for (let i = maxCount; i > 0; i--) {
        let curRow = ""
        for (const val of Object.values(obj)) {
            curRow += (val >= i) ? "#" : " "
        }
        ans += curRow + "\n";
    }
    for (const key of Object.keys(obj)) {
        ans += key
    }
    return ans;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0];
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
