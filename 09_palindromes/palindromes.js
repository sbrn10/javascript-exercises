const palindromes = function (string) {
    string = string.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    console.log(string)
    result = (string == reverseString(string));
    return result;
};

function reverseString(string) {
    let result = string.split("").reverse().join("");
    console.log(result);
    return result;
}
// Do not edit below this line
module.exports = palindromes;
