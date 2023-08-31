function getRes(n, k, m) {
    if (n < k || k < m) return 0;
    let res = 0;
    while (n >= k) {
        n += (-k + k % m);
        res += Math.floor(k / m);
    }
    return res;
}

if (require.main === module) {
    process.stdin.on('data', data => {
        const [n, k, m] = data.toString().trim().split(' ').map(n => +n);
        let result = getRes(n, k, m);
        process.stdout.write(result + '');
        process.exit();
    });
}


module.exports = getRes;
