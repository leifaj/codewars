function findShort(s){
  let sorted = s.split(' ').sort((a,b) => {
    return a.length - b.length;
  });
  return sorted[0].length;
}