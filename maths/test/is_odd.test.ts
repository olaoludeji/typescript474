import { isOdd } from '../is_odd'

/**
 * @description Tests whether a given number is odd or even by checking if it satisfies
 * a certain condition, and reports an error message when passed an non-integer value.
 */
describe('isOdd', () => {
  test.each([
    [2, false],
    [1, true],
    [0, false],
    [-1, true],
    [-2, false]
  ])('correct output for for %i', (nums, expected) => {
    expect(isOdd(nums)).toBe(expected)
  })

  test('only whole numbers should be accepted', () => {
    expect(() => isOdd(0.5)).toThrowError('only integers can be even or odd')
  })
})
