function findLongestWordLength(str) {
    let longestWordLength = 0
    const arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWordLength) {
            longestWordLength = arr[i].length
        }
    }
    return longestWordLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));