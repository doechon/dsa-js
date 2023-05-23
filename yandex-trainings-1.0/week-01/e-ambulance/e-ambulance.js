function getRes(K1, M, K2, P2, N2) {
    let numberOfApartmentsOnOneFloor = Math.ceil(K2 / N2);
    let totalNumberOfApartments = numberOfApartmentsOnOneFloor * M;
    let P1 = Math.ceil(K1 / totalNumberOfApartments);
    let N1 = Math.ceil((K1 % totalNumberOfApartments) / numberOfApartmentsOnOneFloor)
    return P1 + " " + N1;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let [K1, M, K2, P2, N2] = fileLines[0].split(' ').map(Number);
    let res = getRes(K1, M, K2, P2, N2).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getRes;
