import { isSortedArray } from '../is_sorted_array'

/**
 * @description Tests whether an array is sorted by passing it to `isSortedArray()`
 * and comparing the result to the expected value.
 */
describe('isSortedArray', () => {
  test.each([
    { arr: [100], expected: true },
    { arr: [9, 2, 3], expected: false },
    { arr: [1, 2, 3], expected: true }
  ])('The return value of ($arr) should be $expected', ({ arr, expected }) => {
    expect(isSortedArray(arr)).toEqual(expected)
  })
})
