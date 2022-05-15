function count (string) {  
  let arr = string.split("");
  let chars = {};
  for (const item of arr) {
    if (chars[item]) {chars[item]++;} else {chars[item] = 1;}
  }
   return chars;
}