function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return []
    } else {
        let res = rangeOfNumbers(startNum, endNum - 1);
        res.push(endNum)
        return res
    }
}

console.log(rangeOfNumbers(1, 5))