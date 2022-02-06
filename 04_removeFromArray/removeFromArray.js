const removeFromArray = function(array,...others) {
    let resultArray = [];
    if (Array.isArray(array)) {
        resultArray = array;
        others.forEach(item => resultArray = resultArray.filter(arrayItem => arrayItem !== item));
        /*for (let argument of others) {
            resultArray = resultArray.filter(item => item !== argument); 
        }*/
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
