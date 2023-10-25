function checkSolutionWithWorkingAlgorithm(workingSolution, nonWorkingSolution) {
    for (let i = 0; i < 1000; i++) {
        let n = Math.floor(Math.random() * 10) + 1
        let arr = Array.from({ length: n},
            () => Math.floor(Math.random() * 10) + 1);
        let k = new Set(arr).size;

        let workingSolutionOutput = workingSolution(arr, k, n);
        let nonWorkingSolutionOutput = nonWorkingSolution(arr, k);

        if (workingSolutionOutput !== nonWorkingSolutionOutput) {
            console.log("input:\n" + [arr, k, n].join(' '))
            console.log("working solution: " + workingSolutionOutput);
            console.log("nonworking solution " + nonWorkingSolutionOutput);
            break;
        }
    }
}

function nonWorkingSolution(arr, k) {
    if (k <= 0) return [0, 0].join(' ')
    const treeTypeCounts = {}
    let counter = 0;
    let [leftIdx, rightIdx] = [0, 0];
    while (counter < k && rightIdx < arr.length) {
        const curType = arr[rightIdx];
        if (!treeTypeCounts.hasOwnProperty(curType))  {
            counter++;
            treeTypeCounts[curType] = 1;
        } else {
            treeTypeCounts[curType]++;
        }
        rightIdx++;
    }
    while (counter === k && (rightIdx - leftIdx + 1) >= k) {
        const curType = arr[leftIdx];
        if (treeTypeCounts[curType] === 1) {
            counter--;
        }
        treeTypeCounts[curType]--;
        leftIdx++;
    }
    return [leftIdx, rightIdx].join(' ');
}


function workingSolution(trees, k, n) {
    let segment = [1, n];
    let minLength = n;

    let availableColors = new Set([trees[0]]);
    let segmentTrees = {[trees[0]]: 1};

    let left = 0;
    let right = 0;

    while (true) {
        while (right < n - 1 && availableColors.size < k) {
            ++right;
            availableColors.add(trees[right]);
            segmentTrees[trees[right]] = segmentTrees[trees[right]] + 1 || 1;
        }

        if (availableColors.size < k) break;

        for(; availableColors.size === k; ++left) {
            let length = right - left + 1;

            if (length < minLength) {
                minLength = length;
                segment = [left + 1, right + 1];

                if (minLength === k) return segment.join(' ');
            }

            --segmentTrees[trees[left]];
            if (!segmentTrees[trees[left]]) availableColors.delete(trees[left]);
        }
    }

    return segment.join(' ');
}


checkSolutionWithWorkingAlgorithm(workingSolution, nonWorkingSolution)
