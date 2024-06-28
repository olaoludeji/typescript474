/**
/**
 * @description Sorts an array of numbers by repeatedly swapping adjacent elements
 * until they are in ascending order, starting from the second element.
 * 
 * @param { number[] } arr - number array to be sorted in ascending order.
 * 
 * @returns { number[] } an sorted array of integers, with elements in increasing order.
 */
export const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }

  return arr
}
