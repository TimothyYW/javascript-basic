/* Callback functions */

function calculator(num1, num2, callback) {
    let result = num1 + num2;
    return callback(result);
}

function displayer(output){
    console.log(output);
}

calculator(5, 10, displayer); // Outputs: 15
