function getResSimpleCount(nums, l, r) {
    let count = 0;
    for (let i = l; i < r; i++) {
        if (nums[i] === 0) {
            count++;
        }
    }
    return count;
}

// via prefix sum
function getRes(nums, l, r) {

    let counts = [];
    for (let i = 0; i < nums.length + 1; i++) {
        if (i === 0) {
            counts.push(0);
        } else {
            counts.push(counts[i-1] + (nums[i-1] === 0))
        }
    }

    return counts[r] - counts[l];
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let input = fileLines[0].split(/\s+/).map(Number);
    let [l, r] = fileLines[1].split(/\s+/).map(Number);
    let res = getRes(input, l, r).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
