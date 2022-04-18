
// My first made solution
findNextSquare = n => Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2)




// shorter solution

findNextSquare = n => Math.sqrt(n) % 1 ? -1 : Math.pow(Math.sqrt(n) + 1, 2)


// shoter than shorter lol
findNextSquare = n => Math.sqrt(n)  % 1 ? -1 : (Math.sqrt(n) + 1) ** 2
// see? lmao