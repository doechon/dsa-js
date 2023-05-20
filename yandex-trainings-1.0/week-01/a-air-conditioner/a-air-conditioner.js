function getAirTemperature(t_room, t_cond, cond) {
    let res = t_room;
    switch (cond) {
        case 'freeze':
            if (res > t_cond) res = t_cond
            break;
        case 'heat':
            if (res < t_cond) res = t_cond
            break;
        case 'auto':
            res = t_cond
            break;
        case 'fan':
            break;
    }
    return res;
}

if (require.main === module) {
    const fs = require('fs');
    const fileLines = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
    let [t_room, t_cond] = fileLines[0].split(' ');
    let cond = fileLines[1];
    let res = getAirTemperature(Number(t_room), Number(t_cond), cond).toString()
    fs.writeFileSync("output.txt", res)
}


module.exports = getAirTemperature;
