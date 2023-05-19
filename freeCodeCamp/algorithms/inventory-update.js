function updateInventory(arr1, arr2) {
    let res = [...arr1]
    for (let [num, name] of arr2) {
        let idx = res.map(x => x[1]).indexOf(name)
        if (idx !== -1) {
            res[idx][0] += num
        } else {
            res.push([num, name])
        }
    }
    res.sort((a, b) => a[1].localeCompare(b[1]))
    return res;
}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));

/*
* [[88, "Bowling Ball"],
* [2, "Dirty Sock"],
* [3, "Hair Pin"],
* [3, "Half-Eaten Apple"],
* [5, "Microphone"],
* [7, "Toothpaste"]]*/