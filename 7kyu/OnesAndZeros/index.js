const binaryArrayToNumber = arr => {
  let sum = 0;
  
  arr.forEach((num, index, arr) => {
    if (num === 1) {
      ((index === arr.length - 1) ? sum += 1 : sum += Math.pow(2, arr.length - index - 1));
    }
  })

  return sum;
};