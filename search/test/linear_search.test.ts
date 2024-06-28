import { linearSearch } from '../linear_search'

/**
 * @description Test.each() performs linear search on an array and compares the result
 * to the expected index for validation.
 */
describe('Linear search', () => {
  test.each([
    [['o', 'b', 'c'], 'c', 2],
    [[1, 2, 3, 4, 5], 4, 3],
    [['s', 't', 'r', 'i', 'n', 'g'], 'a', -1]
  ])(
    'of %o , searching for %o, expected %i',
    (array: any[], target: any, index: number) => {
      expect(linearSearch(array, target)).toStrictEqual(index)
    }
  )
})
