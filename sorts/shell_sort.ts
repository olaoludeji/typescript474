/**
 * @description Iteratively reduces the gap between adjacent elements and shuffles
 * them around until they are in ascending order, returning the sorted array.
 * 
 * @param { T[] } arr - 1D array to be sorted by the shell sort algorithm implemented
 * in the function.
 * 
 * @returns { Array<T> } a sorted array of the original elements.
 */
export function shellSort<T>(arr: T[]): Array<T> {
  // start with the biggest gap, reduce gap twice on each step
  for (let gap = arr.length >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < arr.length; i++) {
      const temp = arr[i]
      let j = i // index for compared element on the left side
      // shift larger elements down
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap]
        j -= gap
      }
      arr[j] = temp // place i-th element at appropriate position
    }
  }
  return arr
}
