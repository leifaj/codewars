function createPhoneNumber(numbers){
  const numStr = numbers.join("");
  let a = numStr.slice(0, 3);
  let b = numStr.slice(3, 6);
  let c = numStr.slice(6);
  return `(${a}) ${b}-${c}`
}