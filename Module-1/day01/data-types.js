// String   : Data yg diapit dengan '', " ", ``
var text = 'Hello';
var description = 'Lorem ipsum dolor...';
var title = `New Blog`;
console.log(typeof text);
console.log(typeof description);
console.log(typeof title);

// Number
var point = 100;
var score = 85;
var decimal = 0.1;
console.log(typeof point);
console.log(typeof score);
console.log(typeof decimal);

// Boolean  : Tipe data yg bernilai true/false
var isMarried = true;
var isGraduated = false;

// Undefined & Null
var isEmpty;
var isDeleted = null;
console.log(typeof isEmpty);
console.log(typeof isDeleted);

// Date
var now = new Date();
console.log(now.getFullYear()); // 2025
console.log(now.getMonth() + 1); // 8  -> Perhitungannya start dari 0 (Januari: 0, Februari: 1, Maret: 2, dst)
console.log(now.getDay()); // 1 -> Perhitungannya start dari 1 (Senin: 1, Selasa: 2, Rabu: 3, dst)
console.log(now.getDate()); // 29
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
