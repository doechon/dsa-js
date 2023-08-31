// convert

let x = 5
console.log(String(x))
console.log(Number(x)) // or +x

// find max min from array

const numberArr = [1, 2, 5, 0]
console.log(Math.min(...numberArr))


// shortest word
const arr = ["flower","flow","flight"]
let shortestWord = arr.reduce((a, b) => a.length <= b.length ? a : b);
console.log(shortestWord)