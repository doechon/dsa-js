const rl = require('readline').createInterface(process.stdin);

function getRes(jewels, stones) {
    let res = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            ++res;
        }
    }
    return res;
}

if (require.main === module) {

    let inputArr = [];
    let lineNumber = 0;
    let inputSize = 2;

    rl.on('line', (line) => {
        inputArr.push(line);
        lineNumber++;
        if (lineNumber === inputSize) {
            const [jewels, stones] = inputArr
            const result = getRes(jewels, stones);
            process.stdout.write(result.toString());
            process.exit()
        }
    });
}


module.exports = getRes;
