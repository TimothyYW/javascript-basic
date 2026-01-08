function swapCase(randomString){
    let swapString = '';

    for(let item of randomString){
        console.log(item);

        if(item === item.toUpperCase()){
            console.log(item.toLowerCase());
            swapString += item.toLowerCase();
        } else if (item === item.toLowerCase()){
            console.log(item.toUpperCase());
            swapString += item.toUpperCase();
        }
    }

    return swapString;
}

console.log(swapCase('the Quick Brown Fox'));// 'THE qUICK bROWN fOX'


/* Find lowesst, middle, highest using conditionals */

function findLowestMiddleHighest(num1, num2, num3){
    let lowest = num1
    let middle = num1
    let highest = num1

    // find lowest
    if(num2 < lowest) lowest = num2;
    if(num3 < lowest) lowest = num3;

    // find highest
    if(num2 > highest){
        highest = num2;
    };
    if(num3 > highest) highest = num3;

    // find middle
    if((num2 >= lowest) && (num2 <= highest)) middle = num2;
    if((num3 >= lowest) && (num3 <= highest)) middle = num3;

    return `lowest: ${lowest}, middle: ${middle}, highest: ${highest}`;
}

console.log(findLowestMiddleHighest(5, 1, 4)); // lowest: 1, middle: 4, highest: 5

function showNumberBasedOnDataType(input){
    if(typeof input === 'string'){
        return 1;
    } else if (typeof input === 'number'){
        return 2;
    } else {
        return 3;
    }
}

console.log(showNumberBasedOnDataType('hello')); // 1

function replaceLetterA(text){
    let replacedText = '';
    for (let item of text){
        if(item === 'a' || item === 'A'){
            replacedText += '*';
        } else {
            replacedText += item;
        }
    }
    return replacedText;
}

console.log(replaceLetterA('An apple a day keeps the doctor away')); // 'An *pple a day keeps the doctor away'