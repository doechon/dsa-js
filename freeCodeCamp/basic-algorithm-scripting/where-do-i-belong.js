function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b
    })
    console.log(arr)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === num) {
            return i;
        }
        if ((arr[i] < num) && (arr[i + 1] >= num)) {
            return i + 1
        }
    }
    return arr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
console.log(getIndexToIns([3, 10, 5], 3))
