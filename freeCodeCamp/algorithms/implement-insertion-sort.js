function insertionSort(array) {
    // Only change code below this line
    let res = []
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < res.length; i++) {
            if (res[i] > array[j]) {
                let temp = res[i];
                res[i] = array[j];
                res.push(temp);
                j++;
            }
        }
        if (res.length === j && j !== array.length) {
            res.push(array[j])
        }
    }
    return res;
    // Only change code above this line
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
console.log(insertionSort([5, 4, 33, 2, 8]))