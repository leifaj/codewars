function printerError(s) {
  errors = 0;
  s.split("").forEach(color => color > "m" && errors++);
  return `${errors}/${s.length}`
}

// Alternate solution
function printerError(s) {
  colors = 'abcdefghijklm';
  errors = 0;
  s.split("").forEach(color => !colors.includes(color) && errors++);
  return `${errors}/${s.length}`
}