/**
/**
 * @description Returns the number of digits in a given non-negative number. If the
 * input is not an integer or is less than 0, it throws an error.
 * 
 * @param { number } num - 10-digit number to be processed and determines whether the
 * function can return a result.
 * 
 * @returns { number } the number of digits in a given number, represented as an integer.
 */
export const numberOfDigits = (num: number): number => {
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error('only natural numbers are supported')
  }

  return Math.floor(Math.log10(num)) + 1
}
