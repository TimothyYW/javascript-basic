/*
    LOOPING : Digunakan untuk mengeksekusi code secara berulang-ulang

    - While
    - Do - While
    - For
*/

/*
    While

    startValue;
    while(condition){
        Block of code
        exitWay
    }
*/

let start = 1; // 1++ -> 2++ -> 3++ -> 4
while (start <= 3) {
  // 4 <= 3? false
  console.log('Hello, World!'); // 3x
  start++;
  //   start += 1;
  //   start = start + 1;
}

/*
    Do While

    startValue
    do{
        Block of code
        exitWay
    }while(condition);
*/

{
  let start = 5; // 5 ---> 6 ---> 7 ---> 8 ---> 9 ---> 10 ---> 11

  do {
    console.log('Hehehe'); // 6x
    start += 1;
  } while (start <= 10); // 11 <= 10? false
}

/*
    For

    for(startValue; condition; exitWay){
        Block of code
    }
*/
for (let i = 1; i <= 5; i++) {
  console.log('Ini Looping For');
}
