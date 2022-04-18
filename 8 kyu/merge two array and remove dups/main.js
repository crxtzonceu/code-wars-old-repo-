mergeArrays = (a, b) => [...new Set(a.concat(b))].sort((a, b) => a - b)
// [... new Set()]  remove the duplicate in an array
// concat    = concatenate arrays
// .sort(a, b) => a - b    = sort an array in ascending order