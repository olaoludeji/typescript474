/**
 * @function matrixMultiplication
 * @description Multiply a matrix with either another matrix, a vector or a scalar
 * @param {Number[][]} matA - An array of an array of numbers
 * @param {Number[][] | Number[] | Number} b - Either an array of an array of numbers, an array of numbers, or a number
 * @return {Number[][] | Number[]} - Either an array of an array of numbers, or an array of numbers
 * @example matrixMultiplication([[1, 2], [3, 4]], [[1, 2], [3, 4]]) = [[7, 10], [15, 22]]
 * @example GreatestCommonFactor([[1, 2], [3, 4]], 2) = [[2, 4], [6, 8]]
 * @example GreatestCommonFactor([[1, 2], [3, 4]], [1, 2]) = [5, 11]
 */

function matrixMultiplication(matA: number[][], b: number[][]): number[][]
function matrixMultiplication(matA: number[][], b: number): number[][]
function matrixMultiplication(matA: number[][], b: number[]): number[]

/**
 * @description Takes two arguments: `matA` and `b`, where `matA` is a matrix of
 * numbers and `b` can be either a scalar or another matrix. The function returns the
 * result of multiplying `matA` by `b`, either as an array of arrays, a flat array,
 * or `null` if the matrices are not compatible for multiplication.
 * 
 * @param { number[][] } matA - 2D array to be multiplied with the input `b`, which
 * can be either a scalar or another 2D array.
 * 
 * @param { any } b - 2D array that is multiplied with each row of the 1D array `matA`,
 * producing a new 2D array or `null`.
 * 
 * @returns { number[][] | number[] | null } an array of numbers representing the
 * result of multiplying a matrix by a scalar.
 */
function matrixMultiplication(
  matA: number[][],
  b: any
): number[][] | number[] | null {
  let matC: any = null

  if (typeof b === 'number') {
    matC = matA.map((row) => row.map((colVal) => colVal * b))
  } else {
    if (matA[0].length !== b.length) {
      return null
    }

    if (typeof b[0] === 'number') {
      matC = matA.map((row) =>
        row.reduce((sum, colVal, i) => sum + colVal * b[i], 0)
      )
    } else {
      matC = new Array(matA.length)
        .fill(null)
        .map(() => new Array(b[0].length).fill(0))
      let i: number, j: number, k: number

      for (i = 0; i < matA.length; i++) {
        for (j = 0; j < b[0].length; j++) {
          for (k = 0; k < matA[0].length; k++) {
            matC[i][j] += matA[i][k] * b[k][j]
          }
        }
      }
    }
  }
  return matC
}

export { matrixMultiplication }
