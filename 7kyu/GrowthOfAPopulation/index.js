function nbYear(p0, percent, aug, p) {
  let years = 0;
  let pCurr = p0;
  
  while (pCurr < p) {
    pCurr += Math.floor(pCurr * (percent / 100)) + aug;
    years++;
  }
  
  return years;
}
