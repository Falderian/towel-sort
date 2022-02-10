
// You should implement your task here.
let matrix2 = [
  [ 1, 2, 3 ],
  [ 4, 5, 6, 99 ],
  [ 7, 8, 9 ],
 ]

module.exports = function towelSort (matrix) {
  if (matrix === [] || matrix === undefined) return []; else {
  let result = [];
  for(let i = 0; i < matrix.length; i++) {
    if (i === 0 || i % 2 === 0) {
      for(let j = 0; j < matrix[i].length; j++) {
      result.push(matrix[i][j]);
      }
    }
    else for(let k = matrix[i].length-1; k >= 0; k--) {
      result.push(matrix[i][k])
    }
  } 
  return result;
}
}
