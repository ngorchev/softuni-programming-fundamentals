function rounding(num1, num2){
    
   if(num2 > 15){
    num2 = 15;
   }

   let finalNumber = num1.toFixed(num2);
   console.log(parseFloat(finalNumber));
}

rounding(2.467212,3);