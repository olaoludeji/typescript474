/**
/**
 * @description Performs a binary search on an array of numbers, finding the specified
 * target element or determining its absence within the provided length bounds.
 * 
 * @param { number[] } array - 0-based indexed array to be searched for the target element.
 * 
 * @param { number } target - element to be searched within the `array`.
 * 
 * @returns { number | null } an integer representing the index of the target element
 * in the array, or `null` if it's not found.
 */
export const sentinelSearch = (
  array: number[],
  target: number
): number | null => {
  const arrayLength = array.length
  if (arrayLength === 0) return null

  // Element to be searched is placed at the last index
  const last = array[arrayLength - 1]
  array[arrayLength - 1] = target

  let index: number = 0
  while (array[index] !== target) index += 1

  // Put the last element back
  array[arrayLength - 1] = last

  if (index < arrayLength - 1 || array[arrayLength - 1] === target) return index
  return null
}
