function cakes(recipe, available) {
  let multiplier = {}; // contains how many cakes a specific ingredient can make
  
  // iterate through the [key, value] pairs in the recipe
  for (const [ingredient, amt] of Object.entries(recipe)) {
    // if the ingredient is not available, return 0 cakes
    if (available[ingredient] === undefined) {
      return 0;
    // if the ingredient is available, update multiplier
    } else {
      multiplier[ingredient] = Math.floor(available[ingredient] / amt);
    }
  }
  
  // turn the multiplier entries into an array, then get the values, then return the minimum value
  return Math.min(...Object.entries(multiplier).map(obj => obj[1]));
}