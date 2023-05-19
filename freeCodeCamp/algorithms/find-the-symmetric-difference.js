function sym(...args) {
    let res = []
    for (let subArr of args) {
        for (let i of [...new Set(subArr)]) {
            if (res.includes(i)) {
                res = res.filter(x => x !== i)
            } else res.push(i)
        }
    }
    return res;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))
console.log(sym([2], [2, 2, 3, 5]))