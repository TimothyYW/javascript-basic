const firstArr = [100, 'abc', true, undefined, null];
const arrDimension = [['Klaus','fridya', 'sandy']];
console.log(arrDimension[0][2]); // sandy

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[1]); // banana

fruits[1] = 'grape';
console.log(fruits); // ['apple', 'grape', 'orange']

delete fruits[0];
console.log(fruits); // [ <1 empty item>, 'grape', 'orange'