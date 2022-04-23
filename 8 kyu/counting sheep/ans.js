const countSheeps = n => n.map(x => Boolean(x)).reduce((a, b) => a + b)



//  much better answer, it uses truthy value

const countSheeps = n => n.map(Boolean).length

// or

const countSheeps = n => n.map(x => x).length