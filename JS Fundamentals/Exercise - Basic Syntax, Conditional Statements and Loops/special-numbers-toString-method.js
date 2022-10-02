//9. Special Numbers:
// Write a program that receives a number n. For all numbers in the range 1…n print the number and if it is special or not (True / False).
//A number is special when its sum of digits is 5, 7 or 11.

function solve(num) {
//   let sum = 0;

//   for (let currentNumber = 1; currentNumber < num; currentNumber++){
//     let sumOfDigits = 0;
//     let numberToString = currentNumber.toString();
//     let stringLength = numberToString.length;

//     for(let index = 0; index < stringLength; index++){
//         if(currentNumber >= 10){
//             sumOfDigits += Number(numberToString[index]);
//         } else {
//             sumOfDigits += Number([currentNumber]);
//         }
//     }
//     if(sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11){
//         console.log(`${currentNumber} -> True`);
//     } else {
//         console.log(`${currentNumber} -> False`);
//         }

//   }

  for (currentNumber = 1; currentNumber < num; currentNumber++) {
    let sum = 0;
    let numberAsString = currentNumber.toString();
    let numberLength = numberAsString.length;
    for (i = 0; i < numberLength; i++) {
    
        if(currentNumber < 10){
        let currentDigit = Number(currentNumber);
        sum += currentDigit;
      } else {
        let currentDigit = Number(numberAsString[i]);
        sum += currentDigit;
      }
        
    }
    if(sum === 5 || sum === 7 || sum === 11){
        console.log(`${currentNumber} -> True`);
      } else {
        console.log(`${currentNumber} -> False`);
      }
    
  }
}
solve(15);
