const add = function(a,b) {
  if (Number.isFinite(a)&&Number.isFinite(b)) {
    return a+b;
  }
  return 'ERROR';
	
};

const subtract = function(a,b) {
  if (Number.isFinite(a)&&Number.isFinite(b)) {
    return a-b;
  }
  return 'ERROR';
	
};

const sum = function(args) {
	let result = args.reduce((sum, num) => {
    if (Number.isFinite(num)) return sum + num;
    else return 'ERROR';
  }, 0);

  return result;
};

const multiply = function(args) {
  let result = args.reduce((res, num) => {
    if (Number.isFinite(num)) return res * num;
    else return 'ERROR';
  }, 1);

  return result;
};

const power = function(a,b) {
	if (Number.isFinite(a)&&Number.isFinite(b)) {
    return a**b;
  }
  return 'ERROR';
};

const factorial = function(a) {
	if (Number.isInteger(a) && (a >= 0)) {
    let result = 1;
    let i = 1;
    while (i < a) {
      i++;
      result *= i;      
    }
    return result;
  } else return 'ERROR';
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
