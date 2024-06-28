/**
 * @function heapsort
 * @description is a comparison-based sorting algorithm that uses a binary heap data structure to repeatedly select and remove the maximum (for max-heap) or minimum (for min-heap) element and place it at the end of the sorted array.
 * @see [Heap Sort](https://www.geeksforgeeks.org/heap-sort/)
 * @example MergeSort([7, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 7]
 * @Complexity_Analysis
 * Space complexity - O(1)
 * Time complexity
 *      Best case   -   O(nlogn)
 *      Worst case  -   O(nlogn)
 *      Average case -  O(nlogn)
 */

// Function to perform the Heap Sort
/**
 * @description Takes an array of numbers as input, sorts it using a maximum heap
 * algorithm and returns the sorted array.
 * 
 * @param { number[] } arr - 1-dimensional array of numbers to be converted into a
 * max heap.
 * 
 * @returns { number[] } a sorted array of the original input elements.
 */
export const HeapSort = (arr: number[]): number[] => {
  buildMaxHeap(arr)

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapify(arr, 0, i)
  }

  return arr
}

// Function to build a max-heap from an array
/**
 * @description Organizes an array of numbers into a maximally Heapsort-optimal binary
 * heap by recursively heapifying the array.
 * 
 * @param { number[] } arr - 1D array to be built into a max heap.
 */
function buildMaxHeap(arr: number[]): void {
  const n = arr.length

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, i, n)
  }
}

// Function to heapify a subtree rooted at a given index
/**
 * @description Organizes an array into a heap by recursively sorting elements at
 * index and its neighbors based on their values. It maintains the property that the
 * largest element is always located at the root of the array.
 * 
 * @param { number[] } arr - 1D array to be sorted using the heapify algorithm.
 * 
 * @param { number } index - 0-based index of the subarray to be sorted and is used
 * as the starting point for the heapification process.
 * 
 * @param { number } size - total number of elements in the array being sorted, which
 * is used to determine the end index of the heapify process.
 */
function heapify(arr: number[], index: number, size: number): void {
  let largest = index
  const left = 2 * index + 1
  const right = 2 * index + 2

  if (left < size && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < size && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== index) {
    swap(arr, index, largest)
    heapify(arr, largest, size)
  }
}

// Function to swap two elements in an array
/**
 * @description Modifies two elements of an array by swapping their values and leaving
 * the array unchanged.
 * 
 * @param { number[] } arr - 1D array whose elements are swapped by the `swap()` function.
 * 
 * @param { number } i - 0-based index of the first element to be swapped in the array.
 * 
 * @param { number } j - 2nd index of the array to be swapped.
 */
function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
