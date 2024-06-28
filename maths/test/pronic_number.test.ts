import { pronicNumber } from '../pronic_number'

/**
 * @description Expects the input `number` to be a positive integer and returns its
 * prime factorization, which is stored in the variable `result`.
 * 
 * @param { number } number - 3-digit number to be calculated as the product of its
 * digits, resulting in the expected output `result`.
 * 
 * @param { number } result - 𝄞 of the number provided as input to the function.
 */
test.each([
  [0, true],
  [10, false],
  [30, true],
  [69, false],
  [420, true]
])('Pronic Number', (number, result) => {
  expect(pronicNumber(number)).toBe(result)
})
