function myReplace(str, before, after) {
    let re = /before/
    const idx = str.indexOf(before)

    return str.slice(0, idx) + after + str.slice(idx + before.length,);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

