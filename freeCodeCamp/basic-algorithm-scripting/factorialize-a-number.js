function factorialize(num) {
    let res = 1;
    for (let i = 2; i < num + 1; i++) {
        res *= i;
    }
    return res;
}

console.log(factorialize(5));