const palindromes = function (str) {
    let array = [...str.toUpperCase()]
    .filter(char => char != char.toLowerCase());
    return array.join('') == array.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
