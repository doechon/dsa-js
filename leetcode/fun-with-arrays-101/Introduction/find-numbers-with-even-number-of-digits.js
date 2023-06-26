/**
 * @param {number[]} nums
 * @return {number}
 */
// const findNumbers = function (nums) {
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         let curNumOfDigits = 0
//         while (nums[i] !== 0) {
//             curNumOfDigits++
//             nums[i] = Math.floor(nums[i] / 10)
//         }
//         if (curNumOfDigits % 2 === 0 && curNumOfDigits !== 0) {
//             count++
//         }
//     }
//     return count
// };



/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) count++
    }
    return count
};
console.log(findNumbers([1999999]))