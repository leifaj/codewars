function spinWords(string){
  let arr = string.split(" ").map(word => word.length >= 5 ? word.split("").reverse().join("") : word);
  return arr.join(" ");
}