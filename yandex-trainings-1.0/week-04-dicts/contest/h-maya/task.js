function getRes(word, letters) {
    const wordLen = word.length;
    const cond = (i) => i + wordLen <= letters.length;

    const check = (letterCounts) => {
        const counts = Object.values(letterCounts);
        for (const count of counts) {
            if (count !== 0) {
                return false;
            }
        }
        return true;
    }

    // if letters length is less than word length
    if (!cond(0) || wordLen === 0) {
        return 0;
    }

    const letterCounts = {}
    for (const letter of word) {
        if (!letterCounts.hasOwnProperty(letter)) {
            letterCounts[letter] = 1;
        } else {
            letterCounts[letter]++;
        }
    }

    let res = 0;
    let i = 0;

    const startWindow = letters.slice(0, wordLen);
    for (const el of startWindow) {
        if (letterCounts.hasOwnProperty(el)) {
            letterCounts[el]--;
        }
    }

    if (check(letterCounts)) {
        res++;
    }

    while (cond(i)) {
        i++;

        // remove prevChar
        let prevChar = letters[i - 1];
        if (letterCounts.hasOwnProperty(prevChar)) {
            letterCounts[prevChar]++;
        }
        // add nextChar
        let nextChar = letters[i + wordLen - 1];
        if (!nextChar) break;

        if (letterCounts.hasOwnProperty(nextChar)) {
            letterCounts[nextChar]--;
        }
        // check
        if (!check(letterCounts)) {
            continue;
        }
        res++;
    }
    return res;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let word = fileLines[1];
    let letters = fileLines[2];
    let res = getRes(word, letters).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
