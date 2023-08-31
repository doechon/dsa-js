function getRes(arr) {
    if (arr.length < 3) return 0;
    let ans = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) ans++
    }
    return ans;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
