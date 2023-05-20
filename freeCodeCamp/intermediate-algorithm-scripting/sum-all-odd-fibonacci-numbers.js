function sumFibs(num) {
    let fib = [0, 1];
    for (let i = 2; i <= num + 2; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
    }
    let res = []
    for (let i = 0; i < fib.length; i++) {
        if (fib[i] < num && fib[i] % 2 !== 0) {
            res.push(fib[i])
        }
    }
    return res;
}

console.log(sumFibs(4));