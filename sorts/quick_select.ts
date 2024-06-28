import { partition } from './quick_sort'
/**
/**
 * @description Partitions an array and finds the k-th element using a divide-and-conquer
 * approach. It first checks if the index is within bounds, then it performs partitioning
 * and recursively calls itself to find the desired element.
 * 
 * @param { number[] } array - 0-indexed list that is being sorted using QuickSelect.
 * 
 * @param { number } k - 0-based index of the element to be selected from the array.
 * 
 * @param { number } left - 0-based index of the starting position for partitioning
 * the array.
 * 
 * @param { number } right - 2nd to last index of the array.
 * 
 * @returns { number } the selected element from the given array based on the provided
 * index `k`.
 */
export const QuickSelect = (
  array: number[],
  k: number,
  left: number = 0,
  right: number = array.length - 1
): number => {
  if (k < 0 || k >= array.length) {
    throw new Error('k is out of bounds')
  }
  if (left === right) {
    // If the list contains only one element, return that element
    return array[left]
  }

  // Partition the array
  const pivotIndex = partition(array, left, right)

  // The pivot is in its final sorted position
  if (k === pivotIndex) {
    return array[k]
  } else if (k < pivotIndex) {
    // If k is less than the pivot index, look left
    return QuickSelect(array, k, left, pivotIndex - 1)
  } else {
    // If k is greater than the pivot index, look right
    return QuickSelect(array, k, pivotIndex + 1, right)
  }
}
