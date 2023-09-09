function getRes(str) {
    let sheriffM = {
        s: 1,
        h: 1,
        e: 1,
        r: 1,
        i: 1,
        f: 2
    }

    let strM = {}

    for (const strEl of str) {
        strM[strEl] = (strM[strEl]) ? strM[strEl] + 1 : 1;
    }

    let count = Infinity;

    for (const [key, val] of Object.entries(sheriffM)) {
        if (!strM.hasOwnProperty(key)) {
            return 0;
        }
        let divN = Math.floor(strM[key] / val);
        count = Math.min(count, divN);
    }
    return count;
}

if (require.main === module) {
    process.stdin.on('data', data => {
        const str = data.toString().trim();
        let result = getRes(str);
        process.stdout.write(result.toString());
        process.exit();
    });
}


module.exports = getRes;

// fheriherffazfszkisrrs
// rifftratatashe
// thegorillaiswatching