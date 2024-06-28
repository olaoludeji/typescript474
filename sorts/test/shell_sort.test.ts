import { shellSort } from '../shell_sort'

/**
 * @description ShellSort tests three scenarios: average, worst, and best cases. It
 * expect the sorted array to match the original unsorted array after applying the
 * Shell sort algorithm.
 */
describe('Shell Sort', () => {
  it('should return the correct value for average case', () => {
    expect(shellSort([4, 1, 8, 10, 3, 2, 5, 0, 7, 6, 9])).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
  })

  it('should return the correct value for worst case', () => {
    expect(shellSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
  })

  it('should return the correct value for best case', () => {
    expect(shellSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
  })
})
