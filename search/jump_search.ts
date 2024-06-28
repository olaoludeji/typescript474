/**
/**
 * @description Searches for an element `target` in an array of numbers using a binary
 * search approach. If found, it returns the index of the element; otherwise, it
 * returns -1.
 * 
 * @param { number[] } array - 0-based index of a number array that contains the
 * values to be searched for a target value.
 * 
 * @param { number } target - value that the function is searching for within the array.
 * 
 * @returns { number } an integer index indicating the position of the target value
 * in the input array.
 */
export const jumpSearch = (array: number[], target: number): number => {
  if (array.length === 0) return -1

  // declare pointers for the current and next indexes and step size
  let currentIdx: number = 0,
    stepSize: number = Math.floor(Math.sqrt(array.length)),
    nextIdx: number = stepSize

  while (array[nextIdx - 1] < target) {
    currentIdx = nextIdx
    nextIdx += stepSize

    if (nextIdx > array.length) {
      nextIdx = array.length
      break
    }
  }

  for (let index = currentIdx; index < nextIdx; index++) {
    if (array[index] == target) {
      return index
    }
  }

  return -1
}
