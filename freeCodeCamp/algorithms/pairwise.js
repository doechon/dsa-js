function pairwise(arr, arg) {
    let res = [];
    let ans = 0;
    function isPairExist(a, b) {
        for (let i of res) {
            if ((i[0]===a && i[1] === b) || (i[0] === b && i[1] === a)) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                if (!isPairExist(arr[i], arr[j])) {
                    res.push([arr[i], arr[j]])
                    ans += i + j
                }
            }
        }
    }
    return ans;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 1, 1], 2))
