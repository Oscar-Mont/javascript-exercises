


const repeatString = function(stringVariable, numRepetitions) {
    result = "";
    if (numRepetitions < 0) {
        result = "ERROR";
    } else {
    for (let i=0; i<numRepetitions; i++) {
        result = result + stringVariable;
    }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
