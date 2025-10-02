/*
    METHODS : Fungsi bawaan dari Javascript. Seringnya digunakan untuk manipulasi data
*/
/*
    STRING METHODS
*/

// .slice   : Memotong karakter tertentu dalam sebuah string
var text = 'Hello_new student Purwadhika';
console.log(text.slice(0, 5)); // mengambil index-0 sampai index-4

// .split   : Convert string ke array
var description = 'Purwadhika Digital School';
console.log(description.split('i')); // []

// .substring
var title = 'Web Development';
console.log(title.substring(0, 3));

var greeting = 'Hello, user01!';
// .toUpperCase : Convert menjadi huruf besar
console.log(greeting.toUpperCase());
// .toLowerCase : Convert menjadi huruf kecil
console.log(greeting.toLowerCase());

// .indexOf     : Untuk mencari index suatu karakter
var alphabets = 'abcdefghijklmn...';
console.log(alphabets.indexOf('c'));

/*
    NUMBER METHODS
*/

var point = '150N0';
// Number
console.log(Number(point)); // NaN Not a Number
// parseInt
console.log(parseInt(point));

var score = '1S1'; //  Number: NaN, parseInt: 1

var memberPoint = 'A123'; // Number: NaN, parseInt: NaN

var price = '1.000.000'; // Number: NaN, parseInt: 1
