function XO(str) {
  let x = 0;
  let o = 0;
  
  str.toLowerCase().split("").forEach(letter => {
    (letter === "x" ? x+=1 : letter === "o" ? o+=1 : void(0))
  })
  
  return (x === o ? true : false)
}