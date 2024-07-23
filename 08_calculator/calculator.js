const add = function (...numbers) {
  return numbers.reduce((accumulator, element) => accumulator + element);
};

const subtract = function (...numbers) {
  return numbers.reduce((accumulator, element) => accumulator - element);
};

const sum = function (array) {
  return array.reduce((accumulator, element) => accumulator + element, 0);
};

const multiply = function (array) {
  return array.reduce((accumulator, element) => accumulator * element);
};

const power = function (...numbers) {
  return numbers.reduce((accumulator, element) => Math.pow(accumulator, element));
};

const factorial = function (number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let answer = number;
    for (let i = number - 1; i > 0; i--) {
      answer = answer * i;
    }
    return answer;
  }
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
