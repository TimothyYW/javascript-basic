/*
    FUNCTION    : Wadah untuk menampung sekumpulan baris code. 
                  Agar code kita bisa re-usable (digunakan berulang-ulang)

        1. Deklarative (Declarative Function)
        2. Expression  (Expression Function)
        3. Arrow       (Arrow Function)
*/
// Deklaratif
function functionName() {
  // Block of code
}

function greeting() {
  console.log('Hello, User!');
}
greeting();

// Expression
const greetingStudent = function () {
  console.log('Hello, Student Web Development!');
};
greetingStudent();

// Arrow
const greetingLecturer = () => {
  console.log('Hello, Lecturer Purwadhika');
};
greetingLecturer();

/*
    FUNCTION with PARAMETERS
*/
function welcome(name, address, hobby) {
  // name, address, hobby -> parameters
  console.log(
    `Hello, ${name}! Your address @${address}. And your hobby is ${hobby}`
  );
}

welcome('Defryan', 'Bogor', 'Ngoding'); // Defryan, Bogor, Ngoding -> arguments

welcome('Fahmi', 'Tangerang', 'Ngoding'); // Fahmi, Tangerang, Ngoding -> arguments

function printText(name = 'Guest', address = 'Indonesa', hobby = 'Unknown') {
  console.log(`Welcome ${name}`);
}

printText('Defryan');

/*
    REST PARAMETERS
*/

const transactions = (tran1, tran2, ...trans) => {
  console.log(tran1);
  console.log(tran2);
  console.log(trans[0]);
  console.log(trans[1]);
  console.log(trans[2]);
};

transactions('Beras', 'Minyak Goreng', 'Sayur', 'Ayam', 'Daging Sapi');
