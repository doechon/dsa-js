function getRes(arr) {

    function intersection(s1, s2) {
        return new Set([...s1].filter(x => s2.has(x)))
    }

    function union(s1, s2) {
        return new Set([...s1, ...s2])
    }

    let knownByAll = arr[0];
    let knownAtLeastByOne = arr[0];

    for (const arrElement of arr) {
        knownByAll = intersection(knownByAll, arrElement)
        knownAtLeastByOne = union(knownAtLeastByOne, arrElement)
    }

    return knownByAll.size + '\n' + [...knownByAll].join('\n') + '\n'
        + knownAtLeastByOne.size  + '\n' + [...knownAtLeastByOne].join('\n');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let count = 0;

    function getCurLine() {
        if (count > fileLines.length) {
            return ''
        }
        const res = fileLines[count];
        count++;
        return res;
    }

    let n = +getCurLine();

    let inputArr = []
    for (let i = 0; i < n; i++) {
        let m = +getCurLine();
        const knownLangs = new Set(fileLines.slice(count, count + m));
        count += m;
        inputArr.push(knownLangs)
    }
    let res = getRes(inputArr).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
