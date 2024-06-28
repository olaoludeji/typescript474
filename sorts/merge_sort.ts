/**
/**
 * @description Sorts an array of numbers using the mergesort algorithm by recursively
 * dividing and recombineing subarrays until a sorted array is obtained.
 * 
 * @param { number[] } array - 1D array to be sorted using the merge sort algorithm.
 * 
 * @returns { number[] } a sorted version of the input array.
 */
export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array.slice()

  const midIndex = Math.floor(array.length / 2)
  const left = array.slice(0, midIndex)
  const right = array.slice(midIndex, array.length)

  return merge(mergeSort(left), mergeSort(right))
}

/**
 * @description Concatenates two arrays by maintaining the order of elements and
 * merging them together based on their values.
 * 
 * @param { number[] } left - left array to be merged with the `right` array.
 * 
 * @param { number[] } right - 2nd array that is being merged with the `left` parameter.
 * 
 * @returns { number[] } an array of size equal to the sum of the lengths of the input
 * arrays.
 */
function merge(left: number[], right: number[]): number[] {
  const result = Array<number>(left.length + right.length)
  let curIndex = 0
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result[curIndex++] = left[leftIndex++]
    } else {
      result[curIndex++] = right[rightIndex++]
    }
  }
  while (leftIndex < left.length) {
    result[curIndex++] = left[leftIndex++]
  }
  while (rightIndex < right.length) {
    result[curIndex++] = right[rightIndex++]
  }

  return result
}
