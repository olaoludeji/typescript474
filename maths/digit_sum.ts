/**
/**
 * @description Takes an integer input and calculates its digital root, which is the
 * sum of its digits, then returns the result.
 * 
 * @param { number } num - natural number to be transformed into its digit sum.
 * 
 * @returns { number } the sum of the digits of the input number.
 */
export const digitSum = (num: number): number => {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error('only natural numbers are supported')
  }

  let sum = 0
  while (num != 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }

  return sum
}
