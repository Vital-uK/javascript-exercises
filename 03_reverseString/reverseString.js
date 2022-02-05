const reverseString = function(string) {
    let resultString = "";
    /*for (let i = string.length - 1; i >= 0; i--) {
        resultString += string.slice(i,i+1);
    }
    return resultString;*/
    resultString = string.split("").reverse().join("");
    return resultString;

};

// Do not edit below this line
module.exports = reverseString;
