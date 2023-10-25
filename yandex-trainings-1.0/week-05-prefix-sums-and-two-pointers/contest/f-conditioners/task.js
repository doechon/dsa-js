function getRes(needPowers, powerPricePairs) {

    const obj = {}

    for (const [power, price] of powerPricePairs) {
        if (obj[price] === undefined || obj[price] < power) {
            obj[price] = power;
        }
    }

    const sortedKeys = Object.keys(obj).sort((a, b) => +a - +b)

    let counter = 0;
    for (const needPower of needPowers) {
        for (const price of sortedKeys) {
            const power = obj[price]
            if (power >= needPower) {
                counter += +price;
                break;
            }
        }
    }

    return counter;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let n = fileLines[0].split(/\s+/).map(Number);
    let as = fileLines[1].split(/\s+/).map(Number);
    let m = fileLines[2].split(/\s+/).map(Number);
    let bcPairs = fileLines.slice(3, m + 1).map(x => x.split(/\s+/).map(Number));
    let res = getRes(as, bcPairs).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
