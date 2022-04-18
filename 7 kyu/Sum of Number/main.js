getSum = (a, b) => {
  const x = Math.min(a, b)
  const y = Math.max(a, b)
  let sum = 0
  for(let i = x;i <= y;i++){
    sum += i
  }
  return sum
}