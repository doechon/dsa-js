function smallestCommons(arr) {
    function getDivisors(n) {
        let divs = {}
        if (n <= 1) return divs;
        for (let i = 2; i <= n; i++) {
            while (n % i === 0) {
                n /= i;
                divs[i] = (divs[i]) ? divs[i] + 1 : 1
            }
        }
        return divs;
    }

    let n_count = {}
    let a = Math.min(arr[0],arr[1])
    let b = Math.max(arr[0], arr[1])
    for (let i = a; i <= b; i++) {
        let curDivs = getDivisors(i);
        for (const key of Object.keys(curDivs)) {
            if (!n_count.hasOwnProperty(key) || curDivs[key] > n_count[key]) n_count[key] = curDivs[key]
        }
    }
    let res = 1;
    for (const key of Object.keys(n_count)) {
        console.log(key, n_count[key])
        res *= Number(key) * Number(n_count[key])
    }
    return res;
}

console.log(smallestCommons([2, 10]));