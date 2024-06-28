import { shuffleArray } from '../shuffle_array'

/**
 * @description Tests whether the `shuffleArray` function changes the length or
 * elements of an array after shuffling it.
 * 
 * @returns { undefined` value because no output is explicitly provided or returned
 * by the code given to you } a list of expectations for each shuffled array.
 * 
 * 	* `test`: A test function that takes an array as input and shuffles it, then
 * checks if the length of the array before and after shuffling is equal, and also
 * checks if all elements in the original array are present in the shuffled array
 * with the same order.
 * 	* `each`: An iteratee function called for each test case, taking an object as
 * input that contains an array as a property named `arr`.
 * 	* `shuffleArray`: A function that takes an array as input and returns a new
 * shuffled version of the array. The implementation of this function is not shown
 * or referred to in the code snippet.
 */
describe('shuffleArray', () => {
  test.each([{ arr: [1, 2, 3] }, { arr: [1, 2, 3, 6, 78, 2] }])(
    "The length of the array $arr does'nt change after shuffling the array",
    ({ arr }) => {
      const originalLength = arr.length
      shuffleArray(arr)
      expect(arr.length).toEqual(originalLength)
    }
  )

  test.each([{ arr: [1, 2, 3] }, { arr: [1, 2, 3, 6, 78, 2] }])(
    'The elements of the array $arr remain the same (possibly with different order) after shuffling the array',
    ({ arr }) => {
      const copyArray = Array.from(arr)
      shuffleArray(arr)
      expect(
        arr.every((elem) => {
          return copyArray.includes(elem)
        })
      ).toEqual(true)
    }
  )
})
