function fakeBin(x){
  return x.split('').map(item => Number(item) < 5 ? 0 : 1).join('');
}