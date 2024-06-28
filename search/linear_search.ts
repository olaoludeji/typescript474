/**
 * @description Performs a linear search on an array of values, searching for a
 * specific target value and returning its index if found, or -1 otherwise.
 * 
 * @param { any[] } array - 1D array to search for the specified `target` element,
 * which is passed as the second input parameter.
 * 
 * @param { any } target - value to be searched for within the array, and its presence
 * determines whether a matching element is found and the function returns its index
 * or -1 if no match is found.
 * 
 * @returns { number } the index of the target element in the input array, or `-1`
 * if the element is not found.
 */
export const linearSearch = (array: any[], target: any): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i
  }
  return -1
}
