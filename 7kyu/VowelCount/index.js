function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  
  str.split("").forEach(item => vowels.includes(item) && vowelsCount++);
  
  return vowelsCount;
}