function getIfSameNumbers(...numbers) {
    let res = Array(3).fill("NO")
    for (let i = 0; i < numbers.length; i++) {
        // format numbers in one style
        let formattedNum = numbers[i];
        formattedNum = numbers[i].replace(/[()\-\+]/g, '')
        if (formattedNum.length === 11 && formattedNum[0] === '7') {
            formattedNum = "8" + formattedNum.slice(1,)
        } else if (formattedNum.length === 7) {
            formattedNum = "8495" + formattedNum
        }
        numbers[i] = formattedNum;

        if (i > 0 && formattedNum === numbers[0]) {
            // for each of book phone numbers check if equal to phoneNumber
            res[i-1] = "YES";
        }
    }

    return res.join("\n");
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let res = getIfSameNumbers(...fileLines.slice(0, 4)).toString()
    fs.writeFileSync("output.txt", res)
}

module.exports = getIfSameNumbers;