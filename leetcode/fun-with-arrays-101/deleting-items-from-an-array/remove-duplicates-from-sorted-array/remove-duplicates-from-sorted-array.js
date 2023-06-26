const removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[counter]) {
            counter++;
            nums[counter] = nums[i];
        }
    }
    // return counter + 1;
    return [counter + 1, nums];
};

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split(' ').map(Number);
    let res = removeDuplicates(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = removeDuplicates;
