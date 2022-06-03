function interest(P,r,n) {
  let simple = P*(1+(r*n));
  let compound = P;
  
  for (i = 1; i <= n; i++) {
    compound += compound * r;
  }
  
  return [Math.round(simple), Math.round(compound)];
}
