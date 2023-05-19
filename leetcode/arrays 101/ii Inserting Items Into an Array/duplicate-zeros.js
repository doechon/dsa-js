/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

const duplicateZeros = function (arr) {
    let new_arr = []
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[j] === 0) {
            new_arr.push(0)
            if (i !== arr.length - 1) new_arr.push(0)
            i++
        } else {
            new_arr.push(arr[j])
        }
        j++
    }
    for (let i = 0; i < new_arr.length; i++) {
        arr[i] = new_arr[i]
    }
};

let arr = [0, 1, 1, 0, 1]
// arr = [0, 0, 0, 0, 0, 0, 0]
duplicateZeros(arr)
console.log(arr)