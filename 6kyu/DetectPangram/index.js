function isPangram(string){
  counts = {}
  
  // convert string to lowercase and iterate through each character
  string.toLowerCase().split("").forEach(char => {
    // if the character is in the alphabet, add it to the dictionary and update the count
    if (/[a-z]/.test(char)) {
      counts[char] ? counts[char]++ : counts[char] = 1
    }
  })
  
  // return True if the dictionary has all 26 letters in it, otherwise False
  return Object.keys(counts).length === 26
}