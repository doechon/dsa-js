// function whatIsInAName(collection, source) {
//     let sourceKeys = Object.keys(source)
//     return collection.filter(x => {
//             for (let i = 0; i < sourceKeys.length; i++) {
//                 if (!x.hasOwnProperty(sourceKeys[i]) || x[sourceKeys[i]] !== source[sourceKeys[i]])
//                     return false;
//             }
//             return true;
//         }
//     )
// }

function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source)
    return collection.filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]))
}

console.log(whatIsInAName([{"apple": 1, "bat": 2}, {"apple": 1}, {"apple": 1, "bat": 2, "cookie": 2}], {
    "apple": 1,
    "cookie": 2
}));
// should return [{ "apple": 1, "bat": 2, "cookie": 2 }]

console.log(whatIsInAName([{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}], {"apple": 1}))
// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].