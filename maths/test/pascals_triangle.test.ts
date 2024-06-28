import { pascalsTriangle } from '../pascals_triangle'

/**
 * @description Iterates over a list of numbers and checks whether the `pascalsTriangle`
 * function returns the expected value for each number.
 */
describe('pascalsTriangle', () => {
  it.each([
    [2, [1, 1]],
    [4, [1, 3, 3, 1]],
    [6, [1, 5, 10, 10, 5, 1]]
  ])('The %i th row should equal to %i', (n, expectation) => {
    expect(pascalsTriangle(n)).toEqual(expectation)
  })
})
