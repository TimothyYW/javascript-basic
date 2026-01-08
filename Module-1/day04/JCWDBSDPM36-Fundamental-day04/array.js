/*
    ARRAY   : Merupakan struktur data yang bisa digunakan untuk menampung berbagai macam data lainnya
*/
// Declaration
let myArray = [1, 2, 3, 4, 5];
let yourArray = new Array('a', 'b', 'c', 'd', 'e');
console.log(myArray);
console.log(yourArray);

// Accessing Item
const footballTeams = ['Persib', 'Persija', 'Bali United'];
footballTeams[0]; // 'Persib'
footballTeams[2]; // 'Bali United'

// Update Item
footballTeams[1] = 'Sriwijaya';
console.log(footballTeams);

// Delete Item
const products = ['Apel', 'Mangga', 'Jeruk'];
delete products[2];
console.log(products[2]);
