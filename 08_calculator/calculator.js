const add = function(a, b) {
  return a+b;
	
};

const subtract = function(a, b) {
  return a-b;
	
};

const sum = function(args) { 
  let result = 0;
  args.forEach(element => {
    result += element;
    console.log(element, result);
  });
  return result;
	
};

const multiply = function(args) {
  let result=1;
  args.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
	
};

const factorial = function(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
	return result;
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
