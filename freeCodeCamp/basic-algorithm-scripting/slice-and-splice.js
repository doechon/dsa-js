function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n, arr2.length)];
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5].