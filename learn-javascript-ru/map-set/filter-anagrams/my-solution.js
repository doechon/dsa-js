let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function compareMaps(map1, map2) {
    //https://stackoverflow.com/a/35951373
    let testVal;
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, val] of map1) {
        testVal = map2.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    for (let [key, val] of map2) {
        testVal = map1.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map1.has(key))) {
            return false;
        }
    }
    return true;
}

function aclean(arr) {
    let m = new Map();

    main_cycle: for (const arrElement of arr) {
        let mEl = new Map();
        for (const ch of arrElement.toLowerCase()) {
            if (mEl.get(ch)) {
                let c = mEl.get(ch)
                mEl.set(ch, ++c)
            } else {
                mEl.set(ch, 1)
            }
        }

        for (const value of m.values()) {
            if (compareMaps(value, mEl)) {
                continue main_cycle;
            }
        }
        m.set(arrElement, mEl)
    }
    return [...m.keys()]
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
