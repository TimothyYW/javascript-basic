/* Array methods */

// .length - returns the number of elements in an array
const foods = ['apple', 'banana', 'orange', 'mango'];

console.log(foods.length); // 4

// .slice() - returns a shallow copy of a portion of an array into a new array object
const cars = ['BMW', 'Audi', 'Mercedes'];
console.log(cars.slice(0, 2)); // [ 'BMW', 'Audi' ]

// .push() - adds one or more elements to the end of an array and returns the new length of the array
const drinks = ['Coke', 'Pepsi', 'Fanta'];
drinks.push('Sprite');
console.log(drinks);

// .unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
const colors = ['Red', 'Green', 'Blue'];
colors.unshift('Yellow');
console.log(colors); // [ 'Yellow', 'Red', 'Green', 'Blue' ]

// .pop() - removes the last element from an array and returns that element
const animals = ['Dog', 'Cat', 'Elephant'];
const lastAnimal = animals.pop();
console.log(lastAnimal);

// .shift() - removes the first element from an array and returns that element
const cities = ['New York', 'Los Angeles', 'Chicago'];
const firstCity = cities.shift();
console.log(firstCity); // New York

// .splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const stadiums = [
    'Geloran Bung Karno',
    'Jakarta International Stadium',
    'Stadion Madya',
    'Stadion Si Jalak Harupat',
    'Galora Bung Tomo'
]

stadiumNAme.splice(2,2);
console.log(stadiumName);

const timnasPlayers = ['Ole', 'Kambuaya', 'Paes'];
timnasPlayers.splice(2,0, 'Nadeo', 'Verdonk');
console.log(timnasPlayers);

const programsInPurwadhika = ['WD', 'VD', 'DM'];
programsInPurwadhika.splice(1,1,'DS');
console.log(programsInPurwadhika)