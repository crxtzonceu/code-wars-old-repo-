const reverseSeq = n => {
  let arr = []
  for(let i = n; i > 0; i--) {
    arr.push(i)
  }
  return arr
}

// i got lost for a minute because of an infinite loop but manage to find it after a while
// n > 0 must be i > 0, since n is the passed value it will run infinitely because it's always greater then zero


// i did something incredible here!!! heres my newly acquired one line solution

reverseSeq = n => [...Array(n)].fill(n).map((x, y) => x - y)
// i made an array with length of n
// i fill all of it by n
// i minus the element by its index
// reverseSeq(5)
// [5, 5, 5, 5, 5]
// [5, 4, 3, 2, 1] = 5 - 0(index), 5 - 1(index) and so on

// nevermind this is much better 

reverseSeq = n => Array(n).fill(n).map((x, y) => x - y)