/**
 * @function lowestCommonMultiple
 * @description Determine the lowest common multiple of a group of numbers.
 * @param {Number[]} nums - An array of numbers.
 * @return {Number} - The lowest common multiple.
 * @see https://www.mathsisfun.com/least-common-multiple.html
 * @example LowestCommonMultiple(3, 4) = 12
 * @example LowestCommonMultiple(8, 6) = 24
 * @example LowestCommonMultiple(5, 8, 3) = 120
 */

import { greatestCommonFactor } from './greatest_common_factor'

//A naive solution which requires no additional mathematical algorithm

/**
 * @description 1) checks for negative numbers and throws an error, then 2) verifies
 * length, 3) calculates and iterates over the maximum number, and returns it as the
 * LCM.
 * 
 * @param { number[] } nums - array of numbers to determine the lowest common multiple.
 * 
 * @returns { number } the lowest common multiple of the input numbers.
 */
export const naiveLCM = (nums: number[]): number => {
  if (nums.some((num) => num < 0)) {
    throw new Error(
      'numbers must be positive to determine lowest common multiple'
    )
  }

  if (nums.length === 0) {
    throw new Error('at least one number must be passed in')
  }

  const max_num = Math.max(...nums)
  let current_num = max_num

  while (true) {
    if (nums.every((num) => current_num % num === 0)) {
      return current_num
    } else {
      current_num += max_num
    }
  }
}

//A typically more efficient solution which requires prior knowledge of GCF
//Note that due to utilizing GCF, which requires natural numbers, this method only accepts natural numbers.

/**
 * @description Calculates the least common multiple of two given numbers and returns
 * the result as a product of the two original numbers divided by the least common multiple.
 * 
 * @param { number } a - 1st factor in the Greatest Common Factor calculation.
 * 
 * @param { number } b - 2nd number multiplied by itself to obtain the factor of
 * greatest common between the 2 numbers.
 * 
 * @returns { number } the least common multiple of `a` and `b`.
 */
export const binaryLCM = (a: number, b: number): number => {
  return (a * b) / greatestCommonFactor([a, b])
}

/**
 * @description Takes an array of numbers as input and returns the least common
 * multiple of all the numbers in the array.
 * 
 * @param { number[] } nums - 0 or more numbers that are to be reduced using the
 * binary long-cycle multiplication algorithm.
 * 
 * @returns { number } the smallest positive integer that is a multiple of all the
 * input numbers.
 */
export const lowestCommonMultiple = (nums: number[]): number => {
  if (nums.length === 0) {
    throw new Error('at least one number must be passed in')
  }

  return nums.reduce(binaryLCM)
}
