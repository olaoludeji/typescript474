/**
 * @description Checks whether a given number is even by performing a modulo operation
 * with `2`. It throws an error if the input is not an integer. If the result of the
 * modulo is zero, then the number is even; otherwise, it is odd.
 * 
 * @param { number } num - number passed to the function, which is tested for whether
 * it can be divided by 2 with no remainders.
 * 
 * @returns { boolean } a boolean indicating whether the input number is even.
 */
export const isEven = (num: number): boolean => {
  if (!Number.isInteger(num)) {
    throw new Error('only integers can be even or odd')
  }

  return num % 2 === 0
}
