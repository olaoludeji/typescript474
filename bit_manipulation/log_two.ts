/**
 * @description Computes and returns the count of bits needed to represent a number
 * using binary representation, given the input number as argument.
 * 
 * @param { number } n - imum number of iterations to perform in the recursive
 * algorithm, and its value determines the number of steps performed before the base
 * case is reached and the result is returned.
 * 
 * @returns { number } 64.
 */
export const logTwo = (n: number): number => {
  let result = 0
  while (n >> 1) {
    n >>= 1
    result++
  }
  return result
}
