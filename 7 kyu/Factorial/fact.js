//My First Answer

factorial = n => {
  let fact = 1
  for(let i = n;i >= 1; i--){
    fact *= i
  }
  return fact
}


// still dont know how recursion works in js but heres a shorter answer

factorial = n => n ? factorial(n - 1) * n : 1