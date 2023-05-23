function getRes(a) {
    return -1;
}

if (require.main === module) {
    process.stdin.on('data', data => {
        const [a, b, c, d] = data.toString().trim().split(' ').map(n => +n);
        let result = getRes(a,b,c,d);
        process.stdout.write(result);
        process.exit();
    });
}


module.exports = getRes;
