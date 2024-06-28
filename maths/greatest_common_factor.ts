/**
/**
 * @description Determines the greatest common factor (GCD) of two integers `a` and
 * `b`. It performs the GCD calculation by repeatedly dividing one of the numbers by
 * the other until only one number is left. The final result is the GCD of the original
 * numbers.
 * 
 * @param { number } a - 1st number being factors determined.
 * 
 * @param { number } b - 2nd number used to find factors by iteratively dividing it
 * by the `a` parameter until it reaches 1, at which point the factor of `a` is returned.
 * 
 * @returns { number } the greatest common factor of two positive integers `a` and `b`.
 */
export const binaryGCF = (a: number, b: number): number => {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    throw new Error('numbers must be natural to determine factors')
  }

  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a
}

/**
 * @description Takes an array of numbers as input and reduces it to a single number,
 * which is the greatest common factor of all the numbers in the array.
 * 
 * @param { number[] } nums - 0 or more numbers to be processed by the `reduce()`
 * method in the function.
 * 
 * @returns { number } the greatest common factor of the input numbers.
 */
export const greatestCommonFactor = (nums: number[]): number => {
  if (nums.length === 0) {
    throw new Error('at least one number must be passed in')
  }

  return nums.reduce(binaryGCF)
}
