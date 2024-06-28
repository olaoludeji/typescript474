/**
 * @description Validates the input array by checking its length and throwing an error
 * if it is empty. It then calculates the minimum value seen so far by iterating over
 * the array and updating a variable with each new value. Finally, the function returns
 * the calculated minimum value.
 * 
 * @param { number[] } nums - 0-dimensional array to be checked for validity by the
 * function.
 * 
 * @returns { number } the smallest number present in the input array.
 */
export const findMin = (nums: number[]): number => {
  if (nums.length === 0) {
    throw new Error('array must have length of 1 or greater')
  }

  let minimumSeen: number = nums[0]
  for (const num of nums) {
    if (num < minimumSeen) {
      minimumSeen = num
    }
  }

  return minimumSeen
}
