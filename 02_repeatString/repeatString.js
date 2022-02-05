const repeatString = function(string,repeatNum) {
    if (repeatNum >= 0) {
        resultString = "";
        for (let i = 0; i < repeatNum; i++) {
            resultString += string;
        }
    } else {
        resultString = "ERROR"
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
