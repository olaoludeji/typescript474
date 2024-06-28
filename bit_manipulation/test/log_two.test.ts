import { logTwo } from '../log_two'

/**
 * @description Performs log2 operation on an input value and returns its mathematical
 * floor value.
 */
describe('LogTwoTests', () => {
  test.each([...Array(100).keys()].map((i) => [i + 1]))('log2(%i)', (input) => {
    expect(logTwo(input)).toBe(Math.floor(Math.log2(input)))
  })
})
