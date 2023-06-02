const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) return "OOPS";
    if (num == 1) return 1;
    
    let last = 1;
    let lastButOne = 0;

    let result = 0;

    for (let i = 0; i < num-1; i++) {
        result = last+lastButOne;
        lastButOne = last
        last = result;
    }

    return result;

};

// Do not edit below this line
module.exports = fibonacci;
