import { bubbleSort } from '../bubble_sort'

/**
 * @description BubbleSort tests three scenarios: average, worst, and best case. For
 * each scenario, it verifies that the sorted array is returned correctly by calling
 * `expect()` on the result of the `bubbleSort()` function.
 */
describe('BubbleSort', () => {
  it('should return the correct value for average case', () => {
    expect(bubbleSort([8, 3, 5, 1, 4, 2])).toStrictEqual([1, 2, 3, 4, 5, 8])
  })

  it('should return the correct value for worst case', () => {
    expect(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ])
  })

  it('should return the correct value for best case', () => {
    expect(bubbleSort([1, 2, 3, 4, 5, 8])).toStrictEqual([1, 2, 3, 4, 5, 8])
  })
})
