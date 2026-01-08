const { index } = require("d3-array");

function removeOddNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(removeOddNumbers([1, 2, 3, 4, 5, 6,7,8,9,10])); // [2, 4, 6]

function remove_odd_numbers(arrNumbers){
    let newArrNumbers = [];

    for(let item of arrNumbers){
        if(item % 2 === 0){
            newArrNumbers.push(item);
        }
    }

    return newArrNumbers;
}

console.log(remove_odd_numbers([1, 2, 3, 4, 5, 6,7,8,9,10])); // [2, 4, 6]

arrNumbers.filter((value, index) => {
   value % 2 === 0; 
});
