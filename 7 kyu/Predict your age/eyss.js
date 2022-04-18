predictAge = (...n) => parseInt(Math.sqrt(Array.from(n).map((x) => x * x).reduce((a, b) => a + b, 0)) / 2)

// put all args into array
// multiply each one y itself using map
// add all of the sum using reduce
// sqrt and divide by 2
// round to nearest integer. i used parseInt


// this is a short answer using the math.hypot method
// which squared all the numbers and sum then all and getting the sqrt from the result

predictAge = (...n) => Math.hypot(...n) / 2 | 0
// | 0 remove the decimal/truncate it