/**
/**
 * @description Sorts an array by iteratively swapping and shifting elements until
 * they are sorted in ascending order.
 * 
 * @param { number[] } arr - array of numbers that is being sorted.
 * 
 * @returns { number[] } a sorted version of the original array.
 */
export const gnomeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr
  }

  let i: number = 1

  while (i < arr.length) {
    if (arr[i - 1] <= arr[i]) {
      i++ //increment index if sub-array[0:i] already sorted
    } else {
      ;[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]] //swapping two numbers
      i = Math.max(1, i - 1) //go back to the previous index to check the swapped number
    }
  }
  return arr
}
