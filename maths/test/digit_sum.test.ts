import { digitSum } from '../digit_sum'

/**
 * @description Tests the functionality of the `digitSum` function by checking whether
 * it throws an error for non-natural numbers, and whether the sum of natural numbers
 * is correct.
 */
describe('digitSum', () => {
  test.each([-42, -0.1, -1, 0.2, 3.3, NaN, -Infinity, Infinity])(
    'should throw an error for non natural number %d',
    (num) => {
      expect(() => digitSum(num)).toThrowError(
        'only natural numbers are supported'
      )
    }
  )

  test.each([
    [0, 0],
    [1, 1],
    [12, 3],
    [123, 6],
    [9045, 18],
    [1234567890, 45]
  ])('of %i should be %i', (num, expected) => {
    expect(digitSum(num)).toBe(expected)
  })
})
