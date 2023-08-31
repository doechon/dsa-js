// multiset - set with repeated values
// hash function = x % 10

const setSize = 10;
const arr = [...Array(setSize)].map(e => Array());

function add(x) {
    const curArr = arr[x % setSize];
    // add if(check(x)) to make set
    curArr.push(x)
}

function check(x) {
    const curArr = arr[x % setSize];
    return curArr.includes(x)
}

function remove(x) {
    const curArr = arr[x % setSize];
    const idxOfX = curArr.indexOf(x);
    if (idxOfX !== -1) {
        curArr[idxOfX] = curArr[curArr.length - 1];
        curArr.pop()
    }
}

add(2)
add(4)
add(12)
console.log(check(12));
remove(12);
console.log(check(12));
console.log(arr)