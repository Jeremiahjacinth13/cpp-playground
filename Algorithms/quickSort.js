const quickSort = (array) => {

  // base case
  if (array.length === 0 || array.length === 1) return array

  const pivot = array[0]
  let leftArray = []
  let rightArray = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) leftArray.push(array[i])
    else if (array[i] > pivot) rightArray.push(array[i])
  }

  return quickSort(leftArray).concat(pivot).concat(quickSort(rightArray))
}

const array = [5, 4, 3, 2, 1, 7, 8, 9, 10, 42, 32, 54, 41, 13, 56, 57, 49, 30, 32, 411, 343, 466, 545]

console.time('quickSort')
const sorted = quickSort(array)
console.timeEnd('quickSort')
console.log(sorted)
