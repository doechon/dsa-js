function getRes(arr) {

    const shop = {};

    for (const [customer, product, number] of arr) {
        if (shop.hasOwnProperty(customer)) {
            if (shop[customer].hasOwnProperty(product)) {
                shop[customer][product] += +number;
            } else {
                shop[customer][product] = +number;
            }
        } else {

            shop[customer] = {[product]: +number};
        }
    }

    const sortedCustomers = Object.keys(shop).sort();
    let res = []
    for (const customer of sortedCustomers) {
        let curRes = [`${customer}:`]
        const sortedProduct = Object.keys(shop[customer]).sort();
        for (const product of sortedProduct) {
            curRes.push(`${product} ${shop[customer][product]}`)
        }
        res.push(curRes.join('\n'))
    }
    return res.join('\n');
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/[\r?\n]+/);
    let input = fileLines.map(x => x.split(/\s+/));
    let res = getRes(input).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
