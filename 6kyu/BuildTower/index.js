function towerBuilder(nFloors) {
  let tower = [];
  
  for (i = 0; i < nFloors; i++) {
    let arr = [];
    let blocks = 1 + (2 * i);
    let cols = 1 + (2 * nFloors - 1);
    let spaces = (cols - blocks);
    
    arr.push(" ".repeat(spaces/2));
    arr.push("*".repeat(blocks));
    arr.push(" ".repeat(spaces/2));
    
    tower.push(arr.join(""));
  }
  
  return tower;
}