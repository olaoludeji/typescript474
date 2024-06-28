/**
/**
 * @description Performs a binary search algorithm to find an integer value within
 * an array, using a simple iterative approach to narrow down the search space efficiently.
 * 
 * @param { number[] } array - 0-based index of an array of numbers that contains the
 * values to be searched for the target value.
 * 
 * @param { number } target - value that the function should search for within the
 * given array.
 * 
 * @returns { number } an integer indicating the index of the target value within the
 * given array, or `-1` if not found.
 */
export const binarySearchIterative = (
  array: number[],
  target: number
): number => {
  if (array.length === 0) return -1

  // declare pointers for the start, middle and end indices
  let start = 0,
    end = array.length - 1,
    middle = (start + end) >> 1

  // ensure the target is within the bounds of the array
  if (target < array[start] || target > array[end]) return -1

  while (array[middle] !== target && start <= end) {
    // if the target is less than the middle value, move the end pointer to be middle -1 to narrow the search space
    // otherwise, move the start pointer to be middle + 1
    if (target < array[middle]) end = middle - 1
    else start = middle + 1
    // redeclare the middle index when the search window changes
    middle = (start + end) >> 1
  }
  // return the middle index if it is equal to target
  return array[middle] === target ? middle : -1
}

/**
 * @description Performs a recursive binary search on an array of numbers to find the
 * target value within the bounds of the array. It checks if the target is within the
 * bounds, then recursively searches for the target in half of the remaining space
 * until it's found or determined that it's not in the array.
 * 
 * @param { number[] } array - ndarray of integers that will be searched for the
 * target value using the binary search algorithm.
 * 
 * @param { number } target - value that the function is searching for within the
 * given array.
 * 
 * @param { number } start - 0-based index of the leftmost element to search within
 * the array, and its value is used to determine the beginning of the search range.
 * 
 * @param { binary_expression } end - last index of the array that is searched.
 * 
 * @returns { number } a integer value indicating the position of the target element
 * in the array if it exists, or -1 if not found.
 */
export const binarySearchRecursive = (
  array: number[],
  target: number,
  start = 0,
  end = array.length - 1
): number => {
  if (array.length === 0) return -1

  // ensure the target is within the bounds of the array
  if (target < array[start] || target > array[end]) return -1

  const middle = (start + end) >> 1

  if (array[middle] === target) return middle // target found
  if (start > end) return -1 // target not found

  // if the target is less than the middle value, move the end pointer to be middle -1 to narrow the search space
  // otherwise, move the start pointer to be middle + 1
  return target < array[middle]
    ? binarySearchRecursive(array, target, start, middle - 1)
    : binarySearchRecursive(array, target, middle + 1, end)
}
