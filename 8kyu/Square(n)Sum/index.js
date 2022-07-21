function squareSum(numbers) {
  return numbers
    .map((item) => Math.pow(item, 2))
    .reduce((acc, curr) => acc + curr, 0);
}
