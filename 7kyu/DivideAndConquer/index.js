function divCon(x){
  // Filter numbers & sum
  let nums = x.filter(item => typeof(item) === "number").reduce((acc, curr) => acc + curr, 0)
  
  // Filter strings
  let strings = x.filter(item => typeof(item) === "string")
  // Convert to numbers & sum
  strings = strings.map(item => Number(item)).reduce((acc, curr) => acc + curr, 0)

  return nums - strings
}