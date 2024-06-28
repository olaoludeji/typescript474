import { isPerfectNumber } from '../perfect_number'

/**
 * @description It.each([...]) tests whether isPerfectNumber() returns the expected
 * value for various inputs.
 */
describe('perfect Numbers tests', () => {
  it.each([
    [6, true],
    [28, true],
    [496, true],
    [8128, true],
    [12, false],
    [42, false],
    [100, false],
    [0, false],
    [-1, false],
    [1.5, false]
  ])('The return value of %i should be %s', (n, expectation) => {
    expect(isPerfectNumber(n)).toBe(expectation)
  })
})
