function removeElement(arr, val) {
    let nonValCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) nonValCounter++;
        else arr[i - nonValCounter] = arr[i];
    }
    return arr.length - nonValCounter;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let nums = fileLines[0].split(' ').map(Number);
    let val = Number(fileLines[1]);
    let res = removeElement(nums, val).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = removeElement;
