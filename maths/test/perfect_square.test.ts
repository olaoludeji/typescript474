import { perfectSquare } from '../perfect_square'

/**
 * @description Performs a series of `expect` statements, verifying whether given
 * numbers are perfect squares or not, by comparing them to `true` or `false`.
 */
test('Check perfect square', () => {
  expect(perfectSquare(16)).toBe(true)
  expect(perfectSquare(12)).toBe(false)
  expect(perfectSquare(19)).toBe(false)
  expect(perfectSquare(25)).toBe(true)
  expect(perfectSquare(42)).toBe(false)
})
