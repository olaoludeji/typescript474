/**
 * @description Calculates the double factorial of a given non-negative number using
 * an iterative approach.
 * 
 * @param { number } n - non-negative integer value that the function calculates the
 * double factorial of.
 * 
 * @returns { integer } the factorial of a given non-negative integer, computed using
 * iteration.
 */
const DoubleFactorialIterative = (n: number) => {
  if (n < 0) throw new RangeError('The number needs to be non-negative')
  let doubleFactorial = 1

  for (let i = n; i > 0; i -= 2) doubleFactorial *= i

  return doubleFactorial
}

export { DoubleFactorialIterative }
