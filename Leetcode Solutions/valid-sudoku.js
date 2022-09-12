const validSudoku = (array) => {
  const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
  const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
  const diag = [{}, {}, {}, {}, {}, {}, {}, {}, {}]

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      let currVal = array[x][y]
      let rowIndex = x
      let colIndex = y
      let diagIndex = getDiagIndex(x, y)

      if (rows[rowIndex][currVal] && currVal !== '.') return false
      else rows[rowIndex][currVal] = true

      if (cols[colIndex][currVal] && currVal !== '.') return false
      else cols[colIndex][currVal] = true

      if (diag[diagIndex][currVal] && currVal !== '.') return false
      else diag[diagIndex][currVal] = true
    }
  }

  return true
}

const getDiagIndex = (x, y) => {
  return Math.floor(x / 3) + 3 * Math.floor(y / 3)
}

const array = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.log(validSudoku(array))
