function expandedForm(num) {
  const result = [];
  const numArr = String(num).split("");
  numArr.forEach((item, i) => {
    if (item !== '0') {
      result.push(String(item) + '0'.repeat(numArr.length - i - 1));
    }
  });
                        
  return result.join(" + ");
}