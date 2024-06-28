import { uglyNumbers } from '../ugly_numbers'

/**
 * @description Generates an array of numbers and maps them to a sequence of values
 * returned by the `uglyNumbers()` function.
 */
test('Ugly Numbers', () => {
  const uglyNums = uglyNumbers()
  expect(
    Array(11)
      .fill(undefined)
      .map(() => uglyNums.next().value)
  ).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15])
})
