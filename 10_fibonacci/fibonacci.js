const fibonacci = function(a) {
    if (Number.isInteger(+a) && (+a > 0)){
        let first = 1;
        let second = 1;
        let result = 1;
        let i = 2;
        while (i < a) {
            result = first + second;
            first = second;
            second = result;
            i++;
        } return result;

    } else return 'OOPS'
};

// Do not edit below this line
module.exports = fibonacci;
