/**
 * @description Generates an array of numbers representing the Pascal's Triangle up
 * to a given row length `n`. Each number in the array represents the sum of the two
 * preceding numbers in the row. The final number in the array is the sum of all the
 * previous numbers.
 * 
 * @param { number } n - 2D matrix size, determining the number of rows and columns
 * in the resulting array.
 * 
 * @returns { number[] } an array of arrays representing the Pascal's triangle up to
 * a given number `n`.
 */
export const pascalsTriangle = (n: number): number[] => {
  const arr: number[][] = []
  for (let i: number = 0; i < n; i++) {
    if (i === 0) {
      arr.push([1])
      continue
    }

    const lastRow: number[] = arr[i - 1]
    const temp: number[] = []
    for (let j: number = 0; j < lastRow.length + 1; j++) {
      if (j === 0 || j === lastRow.length) {
        temp.push(1)
        continue
      }

      temp.push(lastRow[j - 1] + lastRow[j])
    }

    arr.push(temp)
  }

  return arr[arr.length - 1]
}
