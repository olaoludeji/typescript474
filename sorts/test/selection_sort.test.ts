import { selectionSort } from '../selection_sort'

/**
 * @description Takes an array of numbers as input and returns the output of a test
 * suite executed with `test.each()` to check that the selected sort algorithm returns
 * the correctly sorted array when passed the original, shuffled input.
 */
describe('Testing Selection sort', () => {
  const testCases: number[][] = []

  for (let i = 0; i < 10; i++) {
    const arr = []
    for (let j = 0; j < 100; j++) {
      arr.push(Math.floor(Math.random() * 100))
    }
    testCases.push(arr)
  }
  test.each(testCases)(
    'should return the correct value for test case: %#',
    (...arr: number[]) => {
      expect(selectionSort([...arr])).toStrictEqual(
        [...arr].sort((a: number, b: number) => a - b)
      )
    }
  )
})
