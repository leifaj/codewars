function likes(names) {
  if (names.length === 0) {
    return('no one likes this');
  } else if (names.length === 1) {
    return(`${names.join(" and ")} likes this`)
  }else if (names.length === 2) {
    return(`${names.join(" and ")} like this`)
  } else if (names.length === 3) {
    let first = names.shift();
    return(`${first}, ${names.join(" and ")} like this`)
  } else {
    return(`${names.shift()}, ${names.shift()} and ${names.length} others like this`)
  }
} 