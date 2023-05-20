function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = ''
    for (let i = 0; i < str.length; i++) {
        let symb = str[i]
        if (alphabet.includes(symb)) {
            res += alphabet[(alphabet.indexOf(symb) + 13) % alphabet.length]
        } else res+=symb;
    }
    return res;
}

console.log(rot13("SERR PBQR PNZC"));