function number(n) {
  counter = 0;
  current = 1;

  for (let i = 1; i <= n; i++) 
  {
    counter += current;
    console.log(current);
    current += 2;
  }
  console.log(`Sum: ${counter}`);

}

number(5);
