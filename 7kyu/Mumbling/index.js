function accum(s) {
  let result = [];
  
	s.split("").forEach((item, index) => {
    if (index === 0) {
      result.push(item.toUpperCase());
    } else {
      result.push(item[0].toUpperCase() + item.toLowerCase().repeat(index));
    }
  })
  
  return result.join("-");
}