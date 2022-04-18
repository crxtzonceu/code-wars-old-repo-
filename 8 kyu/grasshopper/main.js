summation = n => {
  let total = 0
  for(let i = total;i <= n; i++) {
    total += i
  }
  return total
}



// here is my new one line solution for this one

summation = n => Array(n).fill(1).map((x, y) => x + y).reduce((a, b) => a + b, 0)
// make a array with length of n
// fill it with one since array index starts on zero
// map and add the index to 1
// use reduce and sum all of the elements on the array