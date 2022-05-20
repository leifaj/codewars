function deleteNth(arr, n){
  arrCount = {}; //  this will count instances of items in arr
  newArr = [];
  
  arr.forEach(function(item) {
    arrCount[item] ? arrCount[item]++ : arrCount[item] = 1; // iterate count by 1 if it exists already, otherwise set to 1
    arrCount[item] <= n && newArr.push(item); // if the count is <= n, push it to newArr
  })

  return newArr;
}