function orderWeight(str) {
  nums = str.split(" ");
  nums.sort(compareWeights);

  function compareWeights(a, b) {
    let weightA = a
      .split("")
      .reduce((acc, curr) => Number(acc) + Number(curr), 0);
    let weightB = b
      .split("")
      .reduce((acc, curr) => Number(acc) + Number(curr), 0);

    if (a === b) return 0;
    if (weightA > weightB) return 1;
    if (weightA < weightB) return -1;
    if (weightA === weightB) {
      return String(a) > String(b) ? 1 : -1;
    }
  }

  return nums.join(" ");
}
