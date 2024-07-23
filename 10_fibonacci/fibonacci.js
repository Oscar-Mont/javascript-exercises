const fibonacci = function (number) {

    let cleanNumber;
    if (typeof number == "string") {
        cleanNumber = Number(number);
    } else {
        cleanNumber = number;
    }

    fibonacciArray = [1, 1];

    for (let i = 2; i < cleanNumber; i++) {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
    }

    if (cleanNumber == 0) {
        return 0;
    } else if (cleanNumber < 0) {
        return "OOPS";
    } else {
        return fibonacciArray[number - 1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
