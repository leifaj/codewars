function stockList(books, codes){
  let dict = [];
  arr = [];
  
  codes.forEach(code => {
    books.forEach(book => {
      book_info = book.split(" ");
      book_code = book_info[0][0];
      book_num = Number(book_info[1]);
      if (book_code === code) {
        dict[code] ? dict[code] += book_num : dict[code] = book_num;
      } else {
        dict[code] ? dict[code] += 0 : dict[code] = 0;
      }
    })
  })
  
  Object.keys(dict).forEach(function(key) {
   arr.push(`(${key} : ${dict[key]})`);
  });
  
  return arr.join(" - ");
}