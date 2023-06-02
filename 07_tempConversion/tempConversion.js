const convertToCelsius = function(num) {
  return round( (num - 32) * 5/9 );
};

const convertToFahrenheit = function(num) {
  return round( (num * 9 / 5) + 32 );
};

function round (num) {
  return Math.round(num * 10) / 10
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
