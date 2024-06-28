/**
 * @description Performs binary search for a target value within an array of numbers.
 * It determines the location of the target value by iteratively dividing the interval
 * between the low and high indices into half until the target is found or the interval
 * becomes too small to continue searching.
 * 
 * @param { number[] } array - 0-based index array containing values to be searched
 * for the target value.
 * 
 * @param { number } target - value being searched for within the array.
 * 
 * @returns { number } the index of the target value within the given array, or -1
 * if it is not found.
 */
export const interpolationSearch = (
  array: number[],
  target: number
): number => {
  let lowIndex: number = 0
  let highIndex: number = array.length - 1
  let currentValue: number = array[lowIndex]
  let pos: number = 0

  while (lowIndex <= highIndex) {
    const lowValue: number = array[lowIndex]
    const highValue: number = array[highIndex]

    if (lowValue === highValue) {
      if (array[lowIndex] === target) {
        return lowIndex
      }
      break
    }

    pos = Math.round(
      lowIndex +
        ((target - lowValue) * (highIndex - lowIndex)) / (highValue - lowValue)
    )

    if (pos < 0 || pos >= array.length) {
      break
    }

    currentValue = array[pos]

    if (target === currentValue) {
      return pos
    }

    if (target > currentValue) {
      lowIndex = pos + 1
    } else {
      highIndex = pos - 1
    }
  }

  return -1
}
