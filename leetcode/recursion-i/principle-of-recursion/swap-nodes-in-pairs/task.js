const {constructLinkedList, convertLinkedListToArray} = require("../../../../models/linked-list/linked-list");

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function swapPairs(head) {
    // d -> 1 -> 2 -> 3 -> 4
    // d -> 2 -> 1 -> 3 -> 4
    // d -> 2 -> 1 -> 4 -> 3

    const dummy = new ListNode(0, head)
    let [prev, curr]= [dummy, head]

    while (curr && curr.next) {
        let tmp = curr.next.next;
        prev.next = curr.next;
        prev.next.next = curr;
        prev.next.next.next = tmp;

        [prev, curr] = [curr, curr.next]
    }

    return dummy.next;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').trim().split(/\r?\n/);
    let input = constructLinkedList(fileLines[0].split(' ').map(Number));
    let res = convertLinkedListToArray(swapPairs(input)).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = swapPairs;
