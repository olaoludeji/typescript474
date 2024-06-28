/**
 * @description Takes a number parameter and checks if it is integer. If it's not,
 * an error message is thrown. Otherwise, the function returns true if the number is
 * odd and false otherwise.
 * 
 * @param { number } num - number being analyzed to determine if it is even or odd.
 * 
 * @returns { boolean } a boolean value indicating whether the input number is odd
 * or not.
 */
export const isOdd = (num: number): boolean => {
  if (!Number.isInteger(num)) {
    throw new Error('only integers can be even or odd')
  }

  return num % 2 !== 0
}
