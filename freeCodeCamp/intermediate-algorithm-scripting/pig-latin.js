function translatePigLatin(str) {
    const startWithVowel = ['a', 'e', 'i', 'o', 'u'].some((vowels) => str.startsWith(vowels));
    if (startWithVowel) {
        return str.concat('way')
    }
    let reConsonant = /^[^aeiou]+/g
    let consonants = str.match(reConsonant)
    console.log(...consonants)
    return str.slice(consonants[0].length, ) + consonants + 'ay'
}

console.log(translatePigLatin("schwartz"));