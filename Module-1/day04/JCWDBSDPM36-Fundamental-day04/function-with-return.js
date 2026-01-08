/*
    FUNCTION with RETURN    : Function yang menghasilkan nilai
*/

function sum(num1, num2) {
  let result = num1 + num2;
}

function sumWithReturn(num1, num2) {
  let result = num1 + num2;

  return result;
}

sum(3, 3);
let resultSum = sumWithReturn(5, 5);
console.log(resultSum);
