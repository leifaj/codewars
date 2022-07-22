function order(words) {
  return words
    .split(" ")
    .sort((a, b) => getNum(a) - getNum(b))
    .join(" ");
}

function getNum(word) {
  return parseInt(word.split("").filter((item) => Number(item)));
}
