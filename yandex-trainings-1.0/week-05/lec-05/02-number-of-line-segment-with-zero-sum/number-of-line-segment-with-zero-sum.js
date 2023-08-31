function getRes(nums, n) {
    let prefixZeroSegments = new Array(n + 1).fill(0);

    function makePrefixZeroSegments(nums) {
        for (let i = 0; i < nums.length + 1; i++) {
            if (nums[])
        }
    }

    function countZeroSegments(prefixZeroSegments, l, r) {
        return prefixZeroSegments[r] - prefixZeroSegments[l];
    }

    return -1;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
