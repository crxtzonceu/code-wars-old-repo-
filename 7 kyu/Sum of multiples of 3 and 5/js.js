// This is my first answer

findSum = n => {
  let sum = 0
  for(let i = 3; i <= n; i++){
    if(!(i % 3) || !(i % 5)){
      sum += i
    }
  }
  return sum
}


// other answer using ternary for shorter and cleaner code

findSum = n => {
  let sum = 0
  for(let i = 3;i <= n;i++){
    !(i % 3) || !(i % 5) ? sum += i : sum
  }
  return sum
}

findSum = n => Array(n).fill(1).map((x, y) => x + y).reduce((a, b) => !(b % 3) || !(b % 5) ? a + b : a, 0)