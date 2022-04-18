// make a function that reverse a array without using a method

const reverseArr = x => {
  const arr = []
  for(let i = x.length - 1;i >= 0; i--){
    arr.push(x[i])
  }
  return arr
}

const array = [2, 3, 6, 1, 8, 4]
console.log(reverseArr(array))


// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const arr = ['bonaks', 'bonak', 'bonakerS', 'bonakid']

const capitalize = n => n.map(x => `${x[0].toUpperCase()}${x.slice(1)}`)

console.log(capitalize(arr)) // outputs ["Bonaks", "Bonak", "Bonakers", "Bonakid"]


// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

const sums = n => n * (n + 1) / 2

console.log(sums(100)) // outputs 5050



// Write a function which takes any number of arguments and return the sum of the arguments

const sumArgs = (...n) => [...n].reduce((a, b) => a + b, 0)

console.log(sumArgs(1, 2, 3, 4, 5)) //  outputs 15