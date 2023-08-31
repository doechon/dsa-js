function checkSolutionWithWorkingAlgorithm(workingSolution, nonWorkingSolution) {

    for (let i = 0; i < 1000; i++) {
        let input = Array.from({length: 5}, () => Math.floor(Math.random() * (100 - -100) + -100));
        let workingSolutionOutput = workingSolution(input);
        let nonWorkingSolutionOutput = nonWorkingSolution(input);

        if (workingSolutionOutput !== nonWorkingSolutionOutput) {
            // nonWorkingSolutionOutput(input);
            console.log("input: " + input)
            console.log("working solution: " + workingSolutionOutput);
            console.log("nonworking solution " + nonWorkingSolutionOutput);
            break;
        }
    }
}

function workingSolution(arr) {

}


function nonWorkingSolution(arr) {

}


checkSolutionWithWorkingAlgorithm(workingSolution, nonWorkingSolution)