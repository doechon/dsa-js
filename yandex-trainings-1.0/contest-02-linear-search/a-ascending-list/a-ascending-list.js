function isAscendingOrderList(arr) {
    if (arr.length <= 1) return "NO";
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return "NO"
        }
    }
    return "YES";
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let arr = fileLines[0].split(' ').map(Number);
    let res = isAscendingOrderList(arr).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = isAscendingOrderList;
