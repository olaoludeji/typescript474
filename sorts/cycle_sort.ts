/**
/**
 * @description Iterates through an array of numbers using a nested for loop, and
 * applies a "move" operation to adjacent elements at each step, rearranging them to
 * sort the array.
 * 
 * @param { number[] } array - 2D array to which the `MoveCycle` function is applied.
 * 
 * @returns { array } a sorted array of the original input.
 */
export const cycleSort = (array: number[]) => {
  for (let i: number = 0; i < array.length - 1; i++) {
    MoveCycle(array, i)
  }
  return array
}

/**
 * @description Cycles through an array, assigning each item its previous position,
 * and repeating until the cycle is complete.
 * 
 * @param { number[] } array - 2D array to cycle through, and its elements are used
 * to determine the next index for the cycle to advance to.
 * 
 * @param { number } startIndex - initial position from which to start moving items
 * in the array.
 */
function MoveCycle(array: number[], startIndex: number): void {
  let currentItem: number = array[startIndex]
  let nextChangeIndex: number =
    startIndex + CountSmallerItems(array, startIndex, currentItem)
  if (nextChangeIndex == startIndex) {
    return
  }

  nextChangeIndex = SkipDuplicates(array, nextChangeIndex, currentItem)

  let tmp: number = array[nextChangeIndex]
  array[nextChangeIndex] = currentItem
  currentItem = tmp

  while (nextChangeIndex != startIndex) {
    nextChangeIndex =
      startIndex + CountSmallerItems(array, startIndex, currentItem)
    nextChangeIndex = SkipDuplicates(array, nextChangeIndex, currentItem)

    tmp = array[nextChangeIndex]
    array[nextChangeIndex] = currentItem
    currentItem = tmp
  }
}

/**
 * @description Counts the number of smaller items in an array starting from a given
 * index. It iterates through the array, comparing each item to the current one, and
 * increments a count when a smaller item is found. The return value is the total
 * number of smaller items found.
 * 
 * @param { number[] } array - 1D array of numbers that contains the smaller items
 * to be counted, starting from index `startIndex`.
 * 
 * @param { number } startIndex - index at which the count of smaller items should
 * start, in the original array of numbers.
 * 
 * @param { number } currentItem - item being compared to the array elements during
 * the loop iteration.
 * 
 * @returns { number } the number of elements in the given array that are smaller
 * than the current item being compared.
 */
function CountSmallerItems(
  array: number[],
  startIndex: number,
  currentItem: number
): number {
  let elementsCount: number = 0

  for (let i: number = startIndex + 1; i < array.length; i++) {
    if (currentItem > array[i]) {
      elementsCount++
    }
  }

  return elementsCount
}

/**
 * @description Iterates through an array, skipping over any duplicate items and
 * returning the position of the next unique item.
 * 
 * @param { number[] } array - 1D array whose duplicates are to be skipped, and its
 * value is an integer or integer array.
 * 
 * @param { number } currentPosition - index of the current item being checked for
 * duplicates in the array.
 * 
 * @param { number } currentItem - value being searched for within the array, and is
 * used to determine whether or not the current position in the array contains the
 * same value.
 * 
 * @returns { number } the index of the next item in the array after the duplicates
 * have been skipped.
 */
function SkipDuplicates(
  array: number[],
  currentPosition: number,
  currentItem: number
): number {
  while (array[currentPosition] == currentItem) {
    currentPosition++
  }

  return currentPosition
}
