/**
/**
 * @description Sorts an array of numbers by counting the frequency of each number
 * in the range `[min, max]`. It returns a new sorted array with the same elements
 * as the original array, but in sorted order based on their count.
 * 
 * @param { number[] } inputArr - 0-indexed array of values to be sorted, which are
 * used to determine the position of each element in the sorted array.
 * 
 * @param { number } min - starting index of the sorted array, and it is used to
 * determine the count of elements in each position of the sorted array.
 * 
 * @param { number } max - highest value that the resulting array will contain, and
 * it determines the upper limit of the index values used in the count array.
 * 
 * @returns { array } a sorted array of integers based on the input array and limits.
 */
export const countingSort = (inputArr: number[], min: number, max: number) => {
  const sortedArr = []

  const count = new Array(max - min + 1).fill(0)

  for (let i = 0; i < inputArr.length; i++) count[inputArr[i] - min]++

  count[0] -= 1

  for (let i = 1; i < count.length; i++) count[i] += count[i - 1]

  for (let i = inputArr.length - 1; i >= 0; i--) {
    sortedArr[count[inputArr[i] - min]] = inputArr[i]
    count[inputArr[i] - min]--
  }

  return sortedArr
}
