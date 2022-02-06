const ftoc = function(fTemp) {
  if (Number.isFinite(fTemp)) {
    return +((fTemp - 32)*5/9).toFixed(1);
  }

};

const ctof = function(cTemp) {
  if (Number.isFinite(cTemp)) {
    return +(cTemp*9/5 + 32).toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
