// const removeElement = function (nums, val) {
//     let l = 0, r = nums.length - 1;
//     while (l < r) {
//         if (nums[l] === val) {
//             while (l < r && nums[r] === val) {
//                 r--;
//             }
//             [nums[l], nums[r]] = [nums[r], nums[l]];
//             r--;
//         }
//         if (nums[l] !== val) l++;
//         else break;
//     }
//     if (l === r && nums[l] !== val) l++;
//     return [l, nums.join(' ')].join('\n');
// };

function removeElement(nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    const nums = fileLines[0].split(' ').map(Number);
    const val = Number(fileLines[1]);
    let res = removeElement(nums, val).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = removeElement;
