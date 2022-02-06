const sumAll = function(num1, num2) {
    function positiveInt(num){
        return Number.isInteger(num) && (num > 0);
    }
    if (positiveInt(num1) && positiveInt(num2)) {
        let sum = 0;
        let i = num1;
        let max = num2;
        if (num1 > num2) {
            i = num2;
            max = num1;
        }
        for (;i<=max; i++) sum +=i;
        return sum;
    } else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
