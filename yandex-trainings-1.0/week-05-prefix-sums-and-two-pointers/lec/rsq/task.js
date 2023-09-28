function getRes(nums, l, r) {
    let prefixSum = [];
    for (let i = 0; i < nums.length + 1; i++) {
        if (i === 0) {
            prefixSum.push(0)
        } else {
            prefixSum.push(prefixSum[i - 1] + nums[i - 1])
        }
    }
    return prefixSum[r] - prefixSum[l];
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let nums = fileLines[0].split(/\s+/).map(Number);
    let [l, r] = fileLines[1].split(/\s+/).map(Number);
    let res = getRes(nums, l, r).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
