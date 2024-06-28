/**
/**
 * @description Calculates the square root of a given number using a repeated squaring
 * and comparison approach, terminating when the result is within a specified precision.
 * 
 * @param { number } num - number whose square root is being calculated.
 * 
 * @param { number } precision - ε value that determines when the algorithm terminates
 * by specifying the maximum absolute error tolerated for the calculation of the
 * square root.
 * 
 * @returns { number } the square root of the input number, rounded to a specified precision.
 */
export const squareRoot = (num: number, precision: number = 1e-15): number => {
  if (num < 0) throw new Error('number must be non-negative number')
  if (num === 0) return 0

  let sqrt: number = num
  let curr: number

  while (true) {
    curr = 0.5 * (sqrt + num / sqrt)
    if (Math.abs(curr - sqrt) < precision) {
      return sqrt
    }
    sqrt = curr
  }
}
