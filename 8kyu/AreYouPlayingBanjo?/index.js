const areYouPlayingBanjo = name => {
  let str1 = name + " plays banjo"
  let str2 = name + " does not play banjo"
  return (name[0].toLowerCase() === "r" ? str1 : str2)
}
