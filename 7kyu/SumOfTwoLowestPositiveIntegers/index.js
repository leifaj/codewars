function sumTwoSmallestNumbers(numbers) {  
  const sorted = numbers.sort((a,b) => a-b);
  return (sorted.slice(0, 2).reduce((sum, curr) => sum + curr))
}