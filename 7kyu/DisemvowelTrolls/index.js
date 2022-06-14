function disemvowel(str) {
  vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split("").filter(item => !vowels.includes(item.toLowerCase())).join("")
}