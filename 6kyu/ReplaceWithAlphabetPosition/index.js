function alphabetPosition(text) {
  let dict = {};
  let result = [];

  "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .forEach((item, idx) => (dict[item] = idx + 1));
    
  text
    .toLowerCase()
    .split("")
    .forEach((item) => {
      if (dict[item]) result.push(dict[item]);
    });

  return result.join(" ");
}
