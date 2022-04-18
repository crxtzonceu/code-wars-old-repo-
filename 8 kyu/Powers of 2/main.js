powerOfTwo = n => {
  let arr = []
  for(let i = 0; i <= n; i++) {
    arr.push(2 ** i)
  }
  return arr
}
// This will return the number starting from zero to inputted value and power them to the second power


// I just made a new solution with just a one line

powersOfTwo = n => [...Array(n + 1)].map((_, x) => 2 ** x)