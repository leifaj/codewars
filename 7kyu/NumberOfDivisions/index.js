const divisions = (n, divisor) => {
  let divs = 0;
  let curr = n;
  
  while (curr >= divisor) {
    divs += 1;
    curr = curr / divisor;
  }
  
  return divs;
};