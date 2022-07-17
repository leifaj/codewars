var number = function(busStops){
  let people = 0;
  busStops.forEach(([on, off]) => {
    people += on;
    people -= off;
  })
  
  return people;
}