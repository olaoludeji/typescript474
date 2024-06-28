import {
  binaryLCM,
  lowestCommonMultiple,
  naiveLCM
} from '../lowest_common_multiple'

/**
 * @description Tests three properties of a naive implementation of the lowest common
 * multiple (LCM) algorithm: correctness, acceptance of positive numbers only, and
 * requirement of at least one number input.
 */
describe('naiveLCM', () => {
  test.each([
    [[3, 4], 12],
    [[8, 6], 24],
    [[5, 8, 3], 120],
    [[0.8, 0.4], 0.8]
  ])('of given two numbers is correct', (nums, expected) => {
    expect(naiveLCM(nums)).toBe(expected)
  })

  test('only positive numbers should be accepted', () => {
    expect(() => naiveLCM([-2, -3])).toThrowError(
      'numbers must be positive to determine lowest common multiple'
    )
  })

  test('at least one number must be passed in', () => {
    expect(() => naiveLCM([])).toThrowError(
      'at least one number must be passed in'
    )
  })
})

/**
 * @description Tests the `binaryLCM` function by providing various inputs and verifying
 * the output using `expect`. The function also checks for invalid inputs, such as
 * non-integer numbers or negative values, and throws an error when encountered.
 */
describe('binaryLCM', () => {
  test.each([
    [3, 4, 12],
    [8, 6, 24],
    [8, 16, 16]
  ])('of given two numbers is correct', (numa, numb, expected) => {
    expect(binaryLCM(numa, numb)).toBe(expected)
  })

  test('only natural numbers should be accepted', () => {
    expect(() => binaryLCM(-2, -3)).toThrowError()
    expect(() => binaryLCM(2, -3)).toThrowError()
    expect(() => binaryLCM(-2, 3)).toThrowError()
  })

  test('should throw when any of the inputs is not an int', () => {
    expect(() => binaryLCM(1, 2.5)).toThrowError()
    expect(() => binaryLCM(1.5, 2)).toThrowError()
  })
})

/**
 * @description Tests the `lowestCommonMultiple()` function, providing inputs of pairs
 * of numbers and verifying that the output is correct, only positive numbers are
 * accepted, and at least one number is passed in.
 */
describe('lowestCommonMultiple', () => {
  test.each([
    [[3, 4], 12],
    [[8, 6], 24],
    [[5, 8, 3], 120],
    [[8, 16], 16]
  ])('of given two numbers is correct', (nums, expected) => {
    expect(lowestCommonMultiple(nums)).toBe(expected)
  })

  test('only positive numbers should be accepted', () => {
    expect(() => lowestCommonMultiple([-2, -3])).toThrowError()
  })

  test('at least one number must be passed in', () => {
    expect(() => lowestCommonMultiple([])).toThrowError(
      'at least one number must be passed in'
    )
  })
})
