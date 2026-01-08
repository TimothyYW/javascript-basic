/* Looping Array */

const products = ['swords', 'shield', 'spear'];
products[0];
products[1];
products[2];

for (let i = 0; i<= 2; i++){
    console.log(products[i]);
}

/* looping for ... of */
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits){
    console.log(fruit);
}