/*
    CONDITIONAL STATEMENT   : Pengkondisian yang digunakan untuk menentukan baris program mana yg harus dijalankan
*/

/* IF */
/*
    if(condition){
        // Block of code
    }
*/
if (10 === 10) {
  // true
  console.log('Executed');
}

/* IF - ELSE */
/*
    if(condition){
        // Block of code
    }else{
        // Block of code    
    }
*/
if ('abc' === 'bca') {
  // false
  console.log('First block of code');
} else {
  console.log('Second block of code');
}

/* IF - ELSE IF - ELSE IF - ... - ELSE */
/*
    if(condition){
        // Block of code
    }else if(condition){
        // Block of code
    }else if(condition){
        // Block of code
    }...{
        ...
    }else{
        // Block of code 
    }
*/
let studentExamScore = 80;

if (studentExamScore >= 90) { // 80 >= 90? false
  console.log('Siswa Lulus dengan Nilai Sangat Baik');
} else if (studentExamScore >= 80) { // 80 >= 80? true
  console.log('Siswa Lulus dengan NIlai Cukup Baik');
} else if (studentExamScore >= 75) {
  console.log('Siswa Lulus dengan Nilai Cukup');
} else {
  console.log('Siswa Tidak Lulus');
}
