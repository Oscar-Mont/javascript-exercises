const reverseString = function (str) {
    stringArray = str.split("");
    reverseArray = stringArray.reverse();
    result = reverseArray.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
