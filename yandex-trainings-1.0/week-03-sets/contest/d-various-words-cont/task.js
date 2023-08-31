function getRes(arr) {
    if (arr.length === 1 && arr[0].length === 0) return 0;
    return new Set(arr).size;
}

if (require.main === module) {
    const fs = require('fs');
    const input = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?[ \n]+/);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
