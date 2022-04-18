const countSheep = n => {
  let str = ""
  for(let i = 1; i <= n; i++){
    str += `${i} sheep...`
  }
  return str
}

// this is fukcing better and its one line

countSheep = n => [...Array(n)].map((_, i) => `${i + 1} sheep...`).join("")
//make the arbitrary parameter array.
// use map to get index for each and just add one from it
// use join to combine list arrays into a string