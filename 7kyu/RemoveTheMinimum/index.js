function removeSmallest(numbers) {
  if (numbers.length <= 1) return [];

  let min = numbers[0];
  let minIdx = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
      minIdx = i;
    }
  }

  let result = numbers;
  result.splice(minIdx, 1);
  return result;
}
