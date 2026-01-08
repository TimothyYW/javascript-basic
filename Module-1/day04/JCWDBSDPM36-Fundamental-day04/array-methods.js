/*
    ARRAY METHODS
*/

// .length  : Untuk menghitung jumlah item didalam array
const foods = ['Ayam Geprek', 'Siomay', 'Batagor'];
console.log(foods.length);

// .slice   : Untuk memotong item tertentu didalam array
const randomAlphabets = ['z', 't', 'e', 'b', 'c', 'a'];
console.log(randomAlphabets.slice(0, 3)); // .slice(0, 2) -> [z, t, e]

const fruits = ['Pepaya', 'Mangga', 'Duku'];
// .push    : Untuk menambahkan item baru di index terakhir
fruits.push('Apel');
console.log(fruits);

// .unshift : Untuk menambahkan item baru di index paling awal
fruits.unshift('Semangka');
console.log(fruits);

const students = ['Aboy', 'Immanuel', 'Abed'];
// .pop     : Untuk menghapus item di index terakhir
students.pop();
console.log(students);

// .shift   : Untuk menghapus item di index paling awal
students.shift();
console.log(students);

/*
    .splice : Untuk menambahkan item baru / untuk menghapus item di index yg kita tentukan

    .splice(index, totalItemToDelete, newItem)
*/
const premierLeagueClubs = ['Arsenal', 'City', 'Aston Villa'];

premierLeagueClubs.splice(1, 2);
console.log(premierLeagueClubs);

const purwadhikaCampuss = ['BSD', 'JKT', 'BDG', 'BTM'];
purwadhikaCampuss.splice(2, 0, 'YGY', 'SBY');
console.log(purwadhikaCampuss);

const programsInPwd = ['WD', 'DM', 'VD'];
programsInPwd.splice(2, 1, 'UI/UX', 'DS');
console.log(programsInPwd);

// .sort    : Untuk mengurutkan item di dalam array
const randomNumbers = [100, 1, 5, 10, 20];
randomNumbers.sort((a, b) => a - b); // Ascending (terkecil - terbesar)
randomNumbers.sort((a, b) => b - a); // Descending (terbesar - terkecil)
console.log(randomNumbers);

const randomStrings = ['ayam', 'sapi', 'bebek'];
randomStrings.sort();
console.log(randomStrings);

// .includes: Untuk memastikan apakah item yg kita cari terdapat di dalam array
const randomData = ['abc', true, null, 10000, 'defryan'];
console.log(randomData.includes('defryan'));
