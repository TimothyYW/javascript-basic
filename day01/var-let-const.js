/*
                    Scope   |   Duplicate Name  |   Re-Assign Value
            VAR       x               v                   v
            LET       v               x                   v
            CONST     v               x                   x
*/

// Scope    : Segala sesuatu yang dipisahkan oleh { ... }
// VAR: Tidak punya aturan scope. Bisa di define dimana saja, dan di read dimana saja
// LET & CONST: Punya aturan scope. Ketika di define inner scope, tidak bisa diakses di outer scope
let a = 'xxx';
{
  let b = 'yyy';
  {
    console.log(b);
  }
}

// Duplicate Name
// const fullName = 'Defryan';
// const fullName = 'Muhammad';
// console.log(fullName); // Muhammad

// Re-Assign Value
var point = 0;
point = 100;
console.log(point);

let score = 0;
score = 100; // score = 100;

const examScore = 100;
// examScore = 0;
console.log(examScore);

let alfaPoint = 1000;

{
  let alfaPoint = 500;
  console.log(alfaPoint);
}
