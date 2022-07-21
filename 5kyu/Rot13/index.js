function rot13(message) {
  return message
    .split("")
    .map((item) => getASCII(item))
    .join("");
}

function getASCII(char) {
  let charCode = char.charCodeAt();
  let aCode = char === char.toUpperCase() ? 65 : 97;
  let zCode = aCode + 25;
  if (charCode < aCode || charCode > zCode) return char;

  let newCharCode = charCode + 13;
  if (newCharCode > zCode) {
    return String.fromCharCode(aCode + (newCharCode - zCode - 1));
  } else {
    return String.fromCharCode(newCharCode);
  }
}
