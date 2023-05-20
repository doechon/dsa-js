function largestOfFour(arr) {
    let res = []
    let maxNum = 0
    for (let subarr of arr) {
        for (let i = 0; i < subarr.length; i++) {
            if (subarr[i] > maxNum) {
                res = subarr;
                maxNum = subarr[i]
            }
        }
    }
    return res;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log()