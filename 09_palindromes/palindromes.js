const palindromes = function (str) {
    let validCharacters = "abcdefghijklmnopqrstuvwxyz1234567890"

    let cleanString = str
        .toLowerCase()
        .split('')
        .filter((character) => validCharacters.includes(character))
        .join('');

    let reverseString = cleanString
        .split('').reverse().join('');

    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
