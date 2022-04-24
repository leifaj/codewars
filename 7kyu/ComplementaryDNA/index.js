function DNAStrand(dna){
  const dict = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  return dna.split("").map(item => dict[item]).join("")
}
