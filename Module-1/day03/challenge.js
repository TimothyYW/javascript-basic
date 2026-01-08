let num = 9;

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

function palindromeChecker(str){
    let reversed = str.split('').reverse().join('');
  if (str === reversed) {
    console.log(`${str} → palindrome`);
  } else {
    console.log(`${str} → not palindrome`);
  }
}


palindromeChecker("katak");
palindromeChecker("blanket");

function converterCMtoKM(cm){
    let km = cm / 100000;
    console.log(`${cm} cm = ${km} km`);
}

converterCMtoKM(100000);

function convertIDR(num) {
  let formatted = num.toLocaleString('id-ID', { 
    style: 'currency', 
    currency: 'IDR' 
  });
  console.log(formatted);
}

convertIDR(1000);   
convertIDR(250000); 

function removeFirst(str, search) {
  return str.replace(search, "");
}

console.log(removeFirst("Hello world", "ell")); 

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world")); 