function chunkArrayInGroups(arr, n) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (i % n !== 0) {
            res[res.length - 1].push(arr[i])
        } else {
            res.push([arr[i]])
        }
    }
    return res;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))