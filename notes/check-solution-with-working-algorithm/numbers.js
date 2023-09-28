function checkSolutionWithWorkingAlgorithm(workingSolution, nonWorkingSolution) {
    for (let i = 0; i < 1000; i++) {
        let arr1 = Array.from({length: Math.floor(Math.random() * 10) + 1}, () => Math.floor(Math.random() * 10) + 1).sort((a, b) => a - b);
        let arr2 = Array.from({length: Math.floor(Math.random() * 10) + 1}, () => Math.floor(Math.random() * 10) + 1).sort((a, b) => a - b);
        let input = [arr1, arr2]
        let workingSolutionOutput = workingSolution(...input);
        let nonWorkingSolutionOutput = nonWorkingSolution(...input);

        if (workingSolutionOutput !== nonWorkingSolutionOutput) {
            console.log("input:\n" + input.join('\n'))
            console.log("working solution: " + workingSolutionOutput);
            console.log("nonworking solution " + nonWorkingSolutionOutput);
            break;
        }
    }
}

function workingSolution(shirts, pants) {
    let bestShirtIndex = 0;
    let bestPantsIndex = 0;
    let minDiff = Math.abs(shirts[0] - pants[0]);
    let [n, m] = [shirts.length, pants.length]
    for (let i = 0, j = 0; i < n; ++i) {
        for (; j < m; ++j) {
            let currentDiff = Math.abs(shirts[i] - pants[j]);

            if (currentDiff === 0) return [shirts[i], pants[j]].join(' ');

            if (currentDiff < minDiff) {
                minDiff = currentDiff;
                bestShirtIndex = i;
                bestPantsIndex = j;

                if (pants[j] > shirts[i]) break;

            } else if (pants[j] > shirts[i]) break;

            if (j === m && shirts[i] > pants[j - 1]) break;
        }
    }

    return [shirts[bestShirtIndex], pants[bestPantsIndex]].join(' ');
}


function nonWorkingSolution(arr1, arr2) {
    let [ansEl1, ansEl2] = [0, 0];
    let ansDiff = Infinity;
    let [idx1, idx2] = [0, 0]
    while (idx1 < arr1.length && idx2 < arr2.length) {
        const [el1, el2] = [arr1[idx1], arr2[idx2]]
        const curDiff = el1 - el2;
        if (curDiff === 0) {
            [ansEl1, ansEl2] = [el1, el2];
            break;
        }
        if (curDiff < ansDiff) {
            [ansEl1, ansEl2] = [el1, el2];
            ansDiff = curDiff;
        }
        if (el1 < el2) {
            idx1++;
        } else {
            idx2++;
        }
    }
    return [ansEl1, ansEl2].join(' ');
}


checkSolutionWithWorkingAlgorithm(workingSolution, nonWorkingSolution)
