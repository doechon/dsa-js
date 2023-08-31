let t = 'sad'

let p = new Array(t.length).fill(0);
let j = 0;
let i = 1;

while (i < t.length) {
    if (t[j] === t[i]) {
        p[i] = j + 1;
        i += 1;
        j += 1;
    } else {
        if (j === 0) {
            p[i] = 0;
            i += 1;
        } else {
            j = p[j - 1]
        }
    }
}

let a = 'sadbutsad'
let m = t.length
let n = a.length

i = 0
j = 0
while (i < n) {
    if (a[i] === t[j]) {
        i++;
        j++;
        if (j === m) {
            console.log(i)
            break;
        }
    } else if (j > 0) {
        j = p[j - 1]
        i += 1
    } else i++;
}

if (i === n)
    console.log(-1)