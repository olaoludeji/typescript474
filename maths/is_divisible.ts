/**
/**
 * @description Verifies whether a given number can be divided by another number
 * without causing an error due to dividing by zero.
 * 
 * @param { number } num1 - 1st quantity being divided.
 * 
 * @param { number } num2 - dividend in the division operation.
 * 
 * @returns { boolean } a boolean value indicating whether the dividend and divisor
 * are divisible without any exception thrown.
 */
export const isDivisible = (num1: number, num2: number): boolean => {
  if (num2 === 0) {
    throw new Error('Cannot divide by 0')
  }
  return num1 % num2 === 0
}
