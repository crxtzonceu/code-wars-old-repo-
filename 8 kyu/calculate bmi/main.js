bmi = (w, h) => {
  const bmi = w / h ** 2
  if(bmi <= 18.5) { return "Underweight"}
  else if(bmi <= 25.0) {return "Normal"}
  else if(bmi <= 30.0) {return "Overweight"}
  else {return "Obese"}
}


// this is much cleaner but nested ternary operator is not recommended and it's a bad practice
bmi = (w, h, bmi = w/h/h) => bmi <= 18.5 ? "Underweight" :
                             bmi <= 25.0 ? "Normal" :
                             bmi <= 30.0 ? "Overweight" :
                             "Obese"
// LOL the indentation HAHAHBAHA