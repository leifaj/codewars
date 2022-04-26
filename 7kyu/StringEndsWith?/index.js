function solution(str, ending){
  const endIdx = str.length - ending.length;
  return (str.slice(endIdx) === ending ? true : false)
}