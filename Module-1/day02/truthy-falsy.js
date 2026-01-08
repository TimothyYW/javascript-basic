/*
    TRUTHY - FALSY : Nilai non-boolean yg dikonversi menjadi nilai boolean
*/

// FALSY
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));

// TRUTHY
console.log(Boolean(' '));
console.log(Boolean(10));

// Challenge.
// Lakukan validasi untuk variable input.
// Apabila variable tsb bernilai '' / NaN / 0 / undefined / null: Input anda tidak valid
// Selain ketentuan diatas: Input anda valid

let input = null;
if (Boolean(input) === false) {
  // input -> !falsy -> true
  console.log('Input anda tidak valid');
} else {
  console.log('Input anda valid');
}

if (!input) {
  console.log('Input anda tidak valid');
} else {
  console.log('Input anda valid');
}

if (input) {
  console.log('Input anda valid');
} else {
  console.log('Input anda tidak valid');
}
