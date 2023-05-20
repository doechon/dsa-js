function checkCashRegister(price, cash, cid) {
    let currencyAmount = {
        'ONE HUNDRED': 100,
        'TWENTY': 20,
        'TEN': 10,
        'FIVE': 5,
        'ONE': 1,
        'QUARTER': 0.25,
        'DIME': 0.1,
        'NICKEL': 0.05,
        'PENNY': 0.001
    }

    let desirableChange = cash - price;
    let totalCid = 0;
    let res = []
    for (let i = cid.length - 1; i > -1; i--) {
        let [currency, total] = [cid[i][0], cid[i][1]];
        totalCid += total;

        let amount = currencyAmount[currency];
        let realNumOfAmount = total / amount;
        if (desirableChange >= amount && realNumOfAmount > 0) {
            let x = (Math.floor(desirableChange / amount));
            x = Math.min(x, realNumOfAmount)
            desirableChange -= amount * x;
            desirableChange = parseFloat(desirableChange).toPrecision(12)
            res.push([cid[i][0], amount * x])
        }
    }
    // console.log(res)
    if (totalCid === cash - price) {
        return {status: "CLOSED", change: cid}
    }
    if (desirableChange !== parseFloat(0).toPrecision(12)) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    return {status: "OPEN", change: res};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20,
    [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0],
        ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
    ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))