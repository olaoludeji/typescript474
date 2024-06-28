import { mergeSort } from '../merge_sort'

/**
 * @description Performs an array comparison using the `mergeSort` and `slice` methods.
 * The function iterates through a variable length array `arrLenArr`, creates a new
 * sorted array `inBuiltSortArr` of the same length using `Math.random()` values, and
 * then compares them using `expect`.
 */
describe('Merge Sort', () => {
  it('generating array with variable length and comparing with sorted array', () => {
    const arrLenArr = [10, 200, 40000]

    arrLenArr.forEach((arrLen: number) => {
      const inBuiltSortArr = Array<number>(arrLen)
      for (let i = 0; i < arrLen; i++) {
        inBuiltSortArr[i] = Math.random() * 10000
      }
      const mergeSortArray = inBuiltSortArr.slice()

      inBuiltSortArr.sort((a, b) => a - b)
      expect(mergeSort(mergeSortArray)).toStrictEqual(inBuiltSortArr)
    })
  })
})
