const sumAll = function (num1, num2) {
    result = 0;
    smallestNumber = 0;
    biggestNumber = 0;
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } else if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    } else {
        if (num1 > num2) {
            biggestNumber = num1;
            smallestNumber = num2;
        } else if (num1 < num2) {
            biggestNumber = num2;
            smallestNumber = num1;
        }
        do {
            result = result + smallestNumber;
            smallestNumber = smallestNumber + 1;
        } while (smallestNumber <= biggestNumber)
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
