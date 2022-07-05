function countPositivesSumNegatives(input) {
  let pos = 0
  let neg = 0
  
  if (input === null || input.length === 0) {return []}
  
  input.forEach(item => item > 0 ? pos ++ : neg += item)
  return [pos, neg]
}