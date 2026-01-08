/*
    CALLBACK
    Adalah function yang dijadikan argument oleh function lain. 
    Umumnya function yang dijadikan callback, akan di eksekusi setelah function pertamanya selesai 
    dijalankan. 
*/

function calculator(num1: number, num2: number, cb: (output: number) => void) {
  // num1 = 5; num2 = 10; cb = fn displayer
  let result = num1 + num2; // result = 15
  return cb(result); // displayer(15)
}

function displayer(output: number) {
  console.log(output);
}

function displayerv1(output: number) {
  console.log(`Hasil Calculator = ${output}`);
}

calculator(5, 10, displayer);
calculator(3, 3, displayerv1);
