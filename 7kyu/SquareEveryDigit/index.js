function squareDigits(num){
  return Number(String(num).split("").reduce((acc, item) => acc + String(Math.pow(Number(item), 2)), ""))
}
