function findNeedle(haystack) {
  let needle = haystack.findIndex(item => item === "needle");
  return (needle === -1 ? "Your function didn't return anything" : 
          `found the needle at position ${needle}`)
}