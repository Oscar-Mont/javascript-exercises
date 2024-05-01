
//convert from farenheit to celsius
const convertToCelsius = function (degreesInFahrenheit) {
  degreesInCelsius = (degreesInFahrenheit - 32) * (5 / 9);
  //round to one decimal place by multiplying by 10, rounding and then dividing by 10
  let result = Math.round(degreesInCelsius * 10) / 10;
  return result;
};

const convertToFahrenheit = function (degreesInCelsius) {
  degreesInFahrenheit = (degreesInCelsius * (9 / 5) + 32);
  //round to one decimal place by multiplying by 10, rounding and then dividing by 10
  let result = Math.round(degreesInFahrenheit * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
