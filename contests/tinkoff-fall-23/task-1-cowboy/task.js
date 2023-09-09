const rl = require('readline').createInterface(process.stdin);

function getRes(money, prices) {
    let curMax = 0;
    for (const price of prices) {
        if (price > curMax && price <= money) {
            curMax = price;
        }
    }
    return curMax;
}

if (require.main === module) {

    let inputArr = [];
    let lineNumber = 0;
    let inputSize = 2;

    rl.on('line', (line) => {
        inputArr.push(line.split(' ').map(Number));
        lineNumber++;
        if (lineNumber === inputSize) {
            const [money, prices] = inputArr;
            const result = getRes(money[1], prices);
            process.stdout.write(result.toString());
            process.exit()
        }
    });
}


module.exports = getRes;

/*
5 13
3 10 300 15 2
*/