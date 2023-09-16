function getRes(arr) {
    const bank = {}

    function makeOperation(operation, client, money = '') {
        if (!bank.hasOwnProperty(client)) {
            bank[client] = 0;
        }
        eval(`bank[client]
        ${operation}
        ${money}`)
    }

    let output = []
    let client, money, receiver;
    for (const [operation, ...args] of arr) {
        switch (operation) {
            case 'DEPOSIT':
                [client, money] = [args[0], Number(args[1])]
                makeOperation("+=", client, money)
                break;
            case 'WITHDRAW':
                [client, money] = [args[0], Number(args[1])]
                makeOperation("-=", client, money)
                break;
            case 'BALANCE':
                [client, money] = [args[0], Number(args[1])]
                if (bank.hasOwnProperty(client)) {
                    output.push(bank[client])
                } else {
                    output.push("ERROR")
                }
                break;
            case 'TRANSFER':
                [sender, receiver, money] = [args[0], args[1], Number(args[2])]
                makeOperation("-=", sender, money)
                makeOperation("+=", receiver, money)
                break;
            case 'INCOME':
                let percent = Number(args[0])
                for (const [client, money] of Object.entries(bank)) {
                    if (money > 0) {
                        bank[client] = Math.floor(money * (1 + percent / 100))
                    }
                }
                break;
        }
    }
    return output.join('\n');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let input = fileLines.map(x => x.split(/\s+/));
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
