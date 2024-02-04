function diagonalDifference(matrix) {
  const panjang = matrix.length;
  const diagonalPertama = matrix
    .map((row, index) => row[index])
    .reduce((acc, val) => acc + val, 0);

  const diagonalKedua = matrix
    .map((row, index) => row[panjang - index - 1])
    .reduce((acc, val) => acc + val, 0);

  const beda = Math.abs(diagonalPertama - diagonalKedua);
  return beda;
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalDifference(matrix));
