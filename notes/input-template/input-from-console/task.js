function getRes(a, b) {
    return a + b;
}

if (require.main === module) {
    process.stdin.on('data', data => {
        const [a, b] = data.toString().trim().split(' ').map(Number);
        let result = getRes(a,b);
        process.stdout.write(result.toString());
        process.exit();
    });
}


module.exports = getRes;
