function mutation(arr) {
    for (let i of arr[1].toLowerCase()) {
        if (arr[0].toLowerCase().indexOf(i) === -1) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hel"]));