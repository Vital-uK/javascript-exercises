const findTheOldest = function(array) {
    const currentYear = (new Date()).getFullYear();
    let result = array.reduce((oldest, person) => {  
        let firstAge;
        let secondAge;  
        if (!('yearOfDeath' in oldest)) {
            firstAge = currentYear - oldest.yearOfBirth;
        } else {
            firstAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        if (!('yearOfDeath' in person)) {
            secondAge = currentYear - person.yearOfBirth;
        } else {
            secondAge = person.yearOfDeath - person.yearOfBirth;
        }        
        return (secondAge > firstAge) ? person : oldest;
    } )
    return result

};

// Do not edit below this line
module.exports = findTheOldest;
