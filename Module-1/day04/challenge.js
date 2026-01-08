function numberTriangle(height) {
  let num = 1; // start counting from 1
  for (let i = 1; i <= height; i++) {
    let row = ""; // create an empty row
    for (let j = 1; j <= i; j++) {
      // add number with leading zero if < 10
      row += (num < 10 ? "0" + num : num) + " ";
      num++;
    }
    console.log(row.trim()); // print each row
  }
}

// Example usage:
numberTriangle(4);
