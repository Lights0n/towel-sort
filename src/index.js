
// You should implement your task here.
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]

module.exports = function towelSort(matrix) {
  let arr = []
  if (matrix  == undefined ) {
    return arr
  }
  matrix.map((el, ind) => {
    if (ind % 2 != 0) {
      el.reverse()
    }
    arr = arr.concat(el)
  })
  return arr;
}
// console.log(module.exports(matrix));

//        [1, 2, 4],
//        [5, 6, 7, 8],
//        [9, 12],

// [ 1, 2, 4, 8, 7, 6, 5, 9, 12 ]

