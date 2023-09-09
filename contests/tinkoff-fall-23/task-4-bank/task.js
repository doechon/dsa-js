const rl = require('readline').createInterface(process.stdin);

function getRes(money, banknotes) {

    banknotes = banknotes.sort((a, b) => b - a);
    let res = ""
    let resCount = 0;
    let resMoney = 0;
    for (const banknote of banknotes) {
        const n = Math.min(2, Math.floor((money - resMoney) / banknote));
        res += (String(banknote) + " ").repeat(n);
        resCount += n;
        resMoney += n * banknote;
    }
    if (resMoney !== money) {
        return -1
    }
    return resCount + '\n' + res.trimEnd();
}

if (require.main === module) {

    let inputArr = [];
    let lineNumber = 0;
    let inputSize = 2;

    rl.on('line', (line) => {
        inputArr.push(...line.split(' ').map(Number));
        lineNumber++;
        if (lineNumber === inputSize) {
            const [money, _, ...banknotes] = inputArr
            const result = getRes(money, banknotes);
            process.stdout.write(result.toString());
            process.exit()
        }
    });
}


module.exports = getRes;
