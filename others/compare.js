
function compareValues(a, b) {
  if (typeof a !== 'object' && typeof b !== 'object') {
    return a === b
  }

  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  let matchedValuesCount = 0

  if (aKeys.length !== bKeys.length) return false

  for (let i = 0; i < aKeys.length; i++) {
    let emptyObject = new Object()
    if (emptyObject.hasOwnProperty.call(b, aKeys[i])) {
      if (compareValues(a[aKeys[i]], b[aKeys[i]])) {
        matchedValuesCount++
      }
    }
  }

  if (
    matchedValuesCount === aKeys.length &&
    matchedValuesCount === bKeys.length
  ) {
    return true
  }

  return false
}

a = { name: 'jeremiah', candance: false, extrafield: 'n' }
b = { name: 'jeremiah', candance: true, extrafield: 'm' }
c = { name: 'jeremiah', age: 10, metadata: { isMyFriend: [10] } }
d = { name: 'jeremiah', age: 10, metadata: { isMyFriend: [10] } }


console.log(compareValues(a, b))
console.log(compareValues(b, a))
console.log(compareValues(c, d))
console.log(compareValues(c, a))
console.log(compareValues('jeremiah', 'dont compare yourself to someonelese'))
