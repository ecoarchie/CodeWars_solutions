function validSolution(board) {
  //TODO
  const columnsArr = [[], [], [], [], [], [], [], [], []];
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 9; i++) {
    // check every row
    if (!nums.every((num) => board[i].includes(num))) {
      return false;
    }
    // check columns
    for (let j = 0; j < 9; j++) {
      if (columnsArr[j].includes(board[i][j])) {
        return false;
      }
      columnsArr[j].push(board[i][j]);
    }
  }
  // check sub-grids
  const length = 3;

  for (let startRow = 0; startRow < 9; startRow += length) {
    for (let startCol = 0; startCol < 9; startCol += length) {
      let subgridsArr = board
        .slice(startRow, startRow + length)
        .map((row) => row.slice(startCol, startCol + length))
        .flat();
      if (!nums.every((num) => subgridsArr.includes(num))) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5],
  ])
);
