function getRes(arr) {
    if (arr.length < 2) return '0';
    let resCounter = Infinity;
    let resComplement = [];

    const getCurAns = (left, right, arr) => {
        let counter = Infinity;
        let complement = [];

        while (right < arr.length) {
            if (arr[left] === arr[right]) {
                right++;
                left--;
            } else {
                return [arr.length - 1, arr.slice(0, arr.length - 1).reverse()]
            }
        }

        // already symmetric
        if (left === -1) {
            return [0, []]
        }

        if (left > -1) {
            complement.unshift(arr.slice(0, left + 1).reverse());
            counter = left + 1;
        }
        return [counter, complement]
    }

    for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
        // center is element
        // like 1 2 1

        // center between elements
        // like 1 2 2 1

        let combinations = [[i - 1, i + 1], [i - 1, i], [i, i + 1]];
        for (const combination of combinations) {
            [left, right] = combination;
            let [counter, complement] = getCurAns(left, right, arr);
            if (counter < resCounter) {
                resCounter = counter;
                resComplement = complement;
            }
        }
    }
    if (resCounter === Infinity || resCounter === 0) return '0';
    return [resCounter, resComplement.join().replaceAll(',', ' ')].join('\n');
}


if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = fileLines[1].split(' ').map(Number);
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
