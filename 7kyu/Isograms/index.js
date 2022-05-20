function isIsogram(str){
  let dict = {};
  str.toLowerCase().split("").forEach(item => dict[item]? dict[item]++ : dict[item] = 1);
  
  for (const key in dict) {
    if (dict[key] > 1) {
      return false;
    }
  }
  
  return true;
}