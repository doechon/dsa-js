function checkSolutionWithWorkingAlgorithm(workingSolution, nonWorkingSolution) {

    function makeWord(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    for (let i = 0; i < 1000; i++) {
        let word = makeWord(Math.floor(Math.random() * 10));
        let letters = makeWord(Math.floor(Math.random() * 50));
        let input = [word, letters]
        let workingSolutionOutput = workingSolution(...input);
        let nonWorkingSolutionOutput = nonWorkingSolution(...input);

        if (workingSolutionOutput !== nonWorkingSolutionOutput) {
            // nonWorkingSolutionOutput(input);
            console.log("input: " + input)
            console.log("working solution: " + workingSolutionOutput);
            console.log("nonworking solution " + nonWorkingSolutionOutput);
            break;
        }
    }
}

function workingSolution(word, letters) {
    const wordLettersCounts = {}
    for (const letter of word) {
        if (!wordLettersCounts.hasOwnProperty(letter)) {
            wordLettersCounts[letter] = 1;
        } else {
            wordLettersCounts[letter]++;
        }
    }

    const wordLen = word.length;

    let res = 0;
    main_cylce :for (let i = 0; i < letters.length; i++) {
        if (i + wordLen > letters.length) {
            return res;
        }
        let copyObj = {};
        Object.assign(copyObj, wordLettersCounts);
        const curWord = letters.slice(i, i + wordLen)
        for (const curWordElement of curWord) {
            if (copyObj.hasOwnProperty(curWordElement)) {
                copyObj[curWordElement]--;
            }
        }
        const counts = Object.values(copyObj);
        for (const count of counts) {
            if (count > 0) {
                continue main_cylce;
            }
        }
        res++;
    }
    return res;
}


function nonWorkingSolution(word, letters) {
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


checkSolutionWithWorkingAlgorithm(workingSolution, nonWorkingSolution)