const rl = require('readline').createInterface(process.stdin);

function getRes(arr1, arr2) {
    function check(curObj, rightIdx) {
        const sl = arr1.slice(leftIdx, rightIdx)
        let curObj1 = {}
        for (const slEl of sl) {
            curObj1[slEl] = (curObj1[slEl]) ? curObj1[slEl] + 1 : 1;
        }
        const keysArr = [...(new Set(Object.keys(curObj).concat(Object.keys(curObj1))))]
        for (const curObjKey in keysArr) {
            if (curObj[curObjKey] !== curObj1[curObjKey]) {
                return 'NO';
            }
        }
        return [{}, rightIdx]
    }

    let leftIdx = 0;
    let curObj = {};
    let rightIdx = 1;
    for (; rightIdx < arr2.length; rightIdx++) {
        let [prev, curr] = [arr2[rightIdx - 1], arr2[rightIdx]]
        if (prev <= curr) {
            curObj[prev] = (curObj[prev]) ? curObj[prev] + 1 : 1;
            curObj[curr] = (curObj[curr]) ? curObj[curr] + 1 : 1;
            rightIdx++;
        } else {
            curObj[prev] = (curObj[prev]) ? curObj[prev] + 1 : 1;
            const resCheck = check(curObj, rightIdx);
            if (resCheck === 'NO') {
                return 'NO'
            }
            [curObj, leftIdx] = resCheck;
        }
    }
    if (check(curObj, rightIdx) === 'NO') {
        return 'NO'
    }
    return 'YES';
}

if (require.main === module) {

    let inputArr = [];
    let lineNumber = 0;
    let inputSize = 3;

    rl.on('line', (line) => {
        inputArr.push(line);
        lineNumber++;
        if (lineNumber === inputSize) {
            let [_, arr1, arr2] = inputArr;
            arr1 = arr1.split(' ').map(Number)
            arr2 = arr2.split(' ').map(Number)
            const result = getRes(arr1, arr2);
            process.stdout.write(result.toString());
            process.exit()
        }
    });
}


module.exports = getRes;

/*
5
1 4 2 2 4
1 4 4 2 2
* */

/*
6
5 1 2 5 3 5
5 1 2 3 5 5
* */

/*
3
4 1 2
1 4 7
**/

/*
1
7
7
**/

/*
7
4 4 1 7 5 3 8
4 1 4 5 7 3 8
**/

