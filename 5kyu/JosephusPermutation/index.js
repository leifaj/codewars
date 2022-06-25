function josephus(list, k) {
  let result = []
  let newList = list
  
  while (newList.length > 0) {
    for (i=0; i<k-1; i++) {
      newList.push(newList.shift())
    }
    
    console.log(newList)
    result.push(newList[0])
    newList.shift()
  }

  return result
}