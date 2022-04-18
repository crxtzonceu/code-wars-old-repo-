// My first answer 

positiveSum = n => {
  const sum = 0
  n.forEach(x => x > 0 ? sum += x : 0)
  return sum
}

// My Second good answer haha 1 line of code

positiveSum = n => n.reduce((a, b) => b > 0 ? a + b : a, 0)
// if value is positive then add prev to curr else acc/skip


// other clever answer
positiveSum = n => n.reduce((a, b) => a + (b > 0 ? b : 0), 0)