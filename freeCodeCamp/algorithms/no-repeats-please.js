function permAlone(str) {
    let d = {}
    for (const strElement of str) {
        d[strElement] = (d[strElement]) ? d[strElement] + 1 : 1;
    }

    let ans = 0

    function permute(d, res) {

        if (Object.keys(d).every(x => d[x] === 0)) {
            if (res === res.replace(/(.)\1+/g, '$1')) {
                ans++;
            }
            return;
        }
        for (const key of Object.keys(d)) {
            for (let i = 0; i < d[key]; i++) {
                d[key] = d[key] - 1;
                permute(d, res += key);
                d[key] = d[key] + 1;
                res = res.slice(0, -1)
            }
        }
    }

    permute(d, "");
    return ans;
}

console.log(permAlone('aab'))
