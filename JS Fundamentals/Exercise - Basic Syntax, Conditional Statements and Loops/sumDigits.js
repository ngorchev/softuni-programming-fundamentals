function sum(num){
    let numberAsString = num.toString();
    let sum = 0;

    for(let i = 0; i < numberAsString.length; i++){
        let currentDigit = Number(numberAsString[i]);
        sum += currentDigit;
    }

    console.log(sum);
}

sum(245678)