function isPrime(num) {
  const absNum = Math.abs(num)
  let prime = true;
  
  if (num <= 1) {prime = false;} 
  
  for (i = 2; i <= Math.sqrt(absNum); i++) {
    if (absNum % i === 0) {prime = false;}
  }
    
  return prime;
}