flattenAndSort = n => [].concat(...n).sort((a, b) => a - b)

// make empty array and concat all of the arbitrary length of arguments
// sort the elements from ascending order