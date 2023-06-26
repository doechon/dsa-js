const merge = function (nums1, m, nums2, n) {
    let res = []
    let idx1 = 0;
    let idx2 = 0;
    while (idx1 !== m || idx2 !== n) {
        if (idx1 === m) {
            res.push(nums2[idx2]);
            idx2++;
        } else if (idx2 === n) {
            res.push(nums1[idx1])
            idx1++
        } else if (nums1[idx1] < nums2[idx2]) {
            res.push(nums1[idx1])
            idx1++
        } else {
            res.push(nums2[idx2])
            idx2++
        }
    }
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = res[i]
    }
};


nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2,5,6]
n = 3
merge(nums1, m, nums2, n)
console.log(nums1)