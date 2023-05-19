/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                let temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
            }
        }
    }
    return nums
};

console.log(sortedSquares([-7,-3,2,3,11]))