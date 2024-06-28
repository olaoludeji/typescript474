/**
 * @description Is called with the argument `num - 1`, returning the result of that
 * call multiplied by `num`.
 * 
 * @param { number } num - natural number that is multiplied with the factorial of
 * the given number less than it.
 * 
 * @returns { number } calculated and passed as an argument to the function, which
 * then performs a calculation based on that value.
 */
export const factorial = (num: number): number => {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error('only natural numbers are supported')
  }

  return num === 0 ? 1 : num * factorial(num - 1)
}
