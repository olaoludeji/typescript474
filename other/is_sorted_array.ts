/**
 * @description Verifies if an array is sorted by checking if every element greater
 * than its previous one is true.
 * 
 * @param { number[] } arr - 1D array whose sorting is being tested.
 * 
 * @returns { boolean } a boolean value indicating whether the provided array is
 * sorted or not.
 */
export function isSortedArray(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false
    }
  }
  return true
}
