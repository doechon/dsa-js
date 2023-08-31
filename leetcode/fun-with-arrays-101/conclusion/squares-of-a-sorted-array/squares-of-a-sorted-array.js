function sortedSquares(arr) {
    let [l, r] = [0, arr.length - 1]
    const res = []
    while (l <= r) {
        let [x, y] = [arr[l], arr[r]]
        if (x * x > y * y) {
            res.push(x * x);
            l++;
        } else {
            res.push(y * y)
            r--;
        }
    }
    return res.reverse();
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = sortedSquares(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = sortedSquares;
