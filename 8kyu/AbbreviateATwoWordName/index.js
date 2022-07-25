function abbrevName(name){
  return name.toUpperCase().split(' ').map(item => item[0]).join('.');
}