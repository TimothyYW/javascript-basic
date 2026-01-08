/*
    LOGICAL OPERATOR    : Digunakan untuk mebandingkan 2 hasil nilai atau lebih

    - AND &&
        > Ketika salah 1 nilai bernilai false, maka hasil akhir akan false
        > Kalau ingin hasil akhir bernilai true, maka seluruh nilai harus bernilai true

    - OR  ||
        > Ketika salah 1 nilai bernilai true, maka hasil akhir akan true
        > Kalau ingin hasil akhir bernilai false, maka seluruh nilai harus bernilai false

    - NOT !
        > Negasi, digunakan untuk membalikan sebuah nilai 
*/

console.log(10 == '10' && 1 === '1'); // true && false -> false
console.log(10 >= 5 && 5 <= 10 && 10 >= 1); // true && true && true -> true

let nilaiAboy = 75;
let nilaiImmanuel = 80;
console.log(nilaiAboy >= 75 || nilaiImmanuel >= 75); // true || true -> true
console.log(nilaiAboy > 90 || nilaiImmanuel > 90); // false || false -> false

let isGraduated = false;
console.log(!isGraduated);
