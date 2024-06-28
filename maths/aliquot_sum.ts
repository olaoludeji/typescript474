/**
 * @description Calculates the sum of the first `num` consecutive integers that are
 * multiples of a given number.
 * 
 * @param { number } num - number for which the function calculates the sum of its digits.
 * 
 * @returns { number } the sum of the numbers from 1 to the input number, minus the
 * sum of the numbers from 1 to the half of the input number.
 */
export const aliquotSum = (num: number): number => {
  if (typeof num !== 'number') throw new TypeError('Input needs to be a number')
  if (num < 0) throw new TypeError('Input cannot be negative')
  if (!Number.isInteger(num)) throw new TypeError('Input cannot be a decimal')

  let sum = 0

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i
  }

  return sum
}
