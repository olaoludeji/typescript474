/**
/**
 * @description Takes an unsorted array of numbers and returns the number of swap
 * operations required to sort it.
 * 
 * @param { number[] } inputArr - array that will be sorted, and it is passed as an
 * argument to the function to enable sorting of its elements.
 * 
 * @returns { number } the number of swap operations required to sort the given array.
 */
export const minSwapsToSort = (inputArr: number[]): number => {
  const sortedArray = inputArr.slice()

  sortedArray.sort()

  const indexMap = new Map()

  for (let i = 0; i < inputArr.length; i++) indexMap.set(inputArr[i], i)

  let swaps = 0
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] !== sortedArray[i]) {
      const temp = inputArr[i]
      inputArr[i] = inputArr[indexMap.get(sortedArray[i])]
      inputArr[indexMap.get(sortedArray[i])] = temp
      indexMap.set(temp, indexMap.get(sortedArray[i]))
      indexMap.set(sortedArray[i], 1)
      swaps++
    }
  }

  return swaps
}
