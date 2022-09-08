function arabicToRoman(number) {
  const map = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }

  let keys = Object.keys(map)

  let string = ''

  for (let i = keys.length - 1; i >= 0; i--) {
    if (Math.floor(number / Number(keys[i])) === 4) {
      console.log(number)
      string += map[keys[i]] + map[keys[i + 1]]
    } else {
      console.log('stuff')
      string += multiplyString(
        map[keys[i]],
        Math.floor(number / Number(keys[i])),
      )
    }

    number %= keys[i]
  }

  return string
}

function multiplyString(stringToMultiply, number) {
  let string = ''

  for (let i = 0; i < number; i++) {
    string += stringToMultiply
  }

  return string
}

// console.log(
//   Array(10)
//     .fill(0)
//     .map((_, i) => arabicToRoman(i + 1)),
// )

// console.log(arabicToRoman(9))

const binarySearch = (array, val) => {
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    if (array[mid] === val) {
      return mid
    } else if (array[mid] > val) {
      max = mid - 1
    } else {
      min = mid + 1
    }
  }

  return -1
}

const linearSearch = (array, val) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return i;
    }
  }

  return -1;
}


const array = Array.from({ length: 100000000 }).map((_, index) => index + 1)
const search = 100000000;

console.time('binarySearch')
console.log(binarySearch(array, search))
console.timeEnd('binarySearch')

console.time('default javascript search')
console.log(array.findIndex(number => number === search));
console.timeEnd('default javascript search')

console.time('linear search');
console.log(linearSearch(array, search));
console.timeEnd('linear search')
