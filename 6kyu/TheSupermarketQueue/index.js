// Notes: Math.min() and Math.max() accepts an infinite amount of arguments, so spread syntax (or .apply) must be used
function queueTime(customers, n) {
  let tills = new Array(n).fill(0); // Fill n-length array with 0s
  
  for (let i = 0; i < customers.length; i++) { // Loop through customers
    let minTillIdx = tills.indexOf(Math.min(...tills)); // Find the index of shortest till time
    tills[minTillIdx] += customers[i]; // Assign next customer to shortest till wait and add to till's sum
  }
  
  return Math.max(...tills); // Return the longest till wait time
}