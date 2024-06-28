/**
/**
 * @description Partitions an array into two subsets based on a chosen pivot element,
 * interchanging elements within each subset and returning the index of the rightmost
 * element in the smaller subset.
 * 
 * @param { number[] } array - 1D array that is sorted by choosing a pivot index and
 * swapping adjacent elements to create a sorted sequence.
 * 
 * @param { number } left - 0-based index of the leftmost element in the array that
 * will be split and rearranged during the algorithm's operation.
 * 
 * @param { number } right - 2-element index of the rightmost element in the array
 * that will be swapped with the pivot element during the merging process.
 * 
 * @returns { int } an index `i` indicating the position of the pivot element in the
 * original array.
 * 
 * 	* The first element of the array is always included in the partitioned array on
 * the left side.
 * 	* The last element of the array is always included in the partitioned array on
 * the right side.
 * 	* All elements between the pivot index and the rightmost element in the original
 * array are included in the partitioned array on the right side.
 * 	* The partitioned array on the left side contains all elements less than or equal
 * to the pivot, and the partitioned array on the right side contains all elements
 * greater than or equal to the pivot.
 */
export const partition = (
  array: number[],
  left: number = 0,
  right: number = array.length - 1
) => {
  const pivotIndex = choosePivot(left, right)
  const pivot = array[pivotIndex]
  ;[array[pivotIndex], array[right]] = [array[right], array[pivotIndex]]
  let i = left - 1
  let j = right

  while (i < j) {
    while (array[++i] < pivot);
    while (array[--j] > pivot);

    if (i < j) {
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  ;[array[right], array[i]] = [array[i], array[right]]
  return i
}

/**
 * @description Randomly selects a number between the specified range, inclusive of
 * the boundaries, and returns its integer value.
 * 
 * @param { number } left - minimum value of the range that will be used to generate
 * a random number between the `left` and `right` values.
 * 
 * @param { number } right - limit of the range that will be generated, serving as
 * an upper bound for the random number returned by the function.
 * 
 * @returns { number } a random integer between `left` and `right`, inclusive.
 */
const choosePivot = (left: number, right: number): number => {
  return Math.floor(Math.random() * (right - left + 1)) + left
}

/**
/**
 * @description Partitions an array into two sub-arrays based on a chosen pivot index,
 * then recursively sorts each sub-array using the QuickSort algorithm, ensuring
 * correct and efficient implementation.
 * 
 * @param { number[] } array - list of numbers to be sorted, and its length is used
 * as the upper bound for the partitioning index in the quicksort algorithm.
 * 
 * @param { number } left - 0-based index of the starting point for partitioning the
 * array in the quicksort algorithm.
 * 
 * @param { number } right - 2nd-to-last element of the input array, used to determine
 * the partition point for the recursive QuickSort call.
 * 
 * @returns { array } a sorted version of the input array.
 */
export const QuickSort = (
  array: number[],
  left: number = 0,
  right: number = array.length - 1
) => {
  if (array.length > 1) {
    const index = partition(array, left, right)

    if (left < index - 1) {
      QuickSort(array, left, index - 1)
    }

    if (index + 1 < right) {
      QuickSort(array, index + 1, right)
    }
  }

  return array
}
