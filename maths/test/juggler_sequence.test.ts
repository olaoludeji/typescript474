import { jugglerSequence } from '../juggler_sequence'

/**
 * @description Evaluates a sequence of integers passed to it using the `jugglerSequence()`
 * function and compares the result to a given value using the `expect()` method.
 */
describe('jugglerSequence', () => {
  it.each([
    [3, 3, 36],
    [3, 5, 2],
    [7, 3, 2],
    [5, 1, 11]
  ])('%i at index %i should equal %i', (a, n, k) => {
    expect(jugglerSequence(a, n)).toBe(k)
  })
})
