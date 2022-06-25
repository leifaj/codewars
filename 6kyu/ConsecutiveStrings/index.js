function longestConsec(arr, k) {
  const n = arr.length;
  let longest = "";
  
  if (n === 0 || k > n || k <= 0 ) {return ""};
  
  for (i = 0; i <= n - k; i++) {
    let str = "";
    
    for (j = 0; j < k; j++) {
      str += (k === 1) ? arr[i] : arr[i+j];
    }
    
    if (str.length > longest.length) {longest = str;}
  }
  
  return longest;
}