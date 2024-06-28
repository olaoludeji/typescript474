import { DoubleFactorialIterative } from '../double_factorial_iterative'

/**
 * @description Tests the `DoubleFactorialIterative` function by providing three input
 * pairs and asserting that the result of the function is equal to the expected value.
 */
describe('Double Factorial', () => {
  test.each([
    [4, 8],
    [5, 15],
    [10, 3840]
  ])('%i!! = %i', (n, expected) => {
    expect(DoubleFactorialIterative(n)).toBe(expected)
  })
})
