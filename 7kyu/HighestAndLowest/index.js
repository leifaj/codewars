function highAndLow(numbers){
  let sorted = numbers.split(" ").sort((a, b) => a - b);
  return `${sorted[sorted.length - 1]} ${sorted[0]}`;
}