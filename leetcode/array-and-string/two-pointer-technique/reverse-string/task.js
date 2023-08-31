function reverseString(arr) {
    let [left, right] = [0, arr.length - 1];
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    return arr;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[0].split('');
    let res = reverseString(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = reverseString;
