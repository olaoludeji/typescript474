import { phi } from '../euler_totient'

const cases: [number, number][] = [
  [4, 2],
  [5, 4],
  [7, 6],
  [10, 4],
  [999, 648],
  [1000, 400],
  [1000000, 400000],
  [999999, 466560],
  [999999999999878, 473684210526240]
]

/**
 * @description Runs `test.each()` with a given array of cases, for each case it
 * provides a test statement to be executed by `expect()`. The statement checks that
 * the value returned by `phi` is equal to the expected value.
 */
describe('phi', () => {
  test.each(cases)('phi of %i should be %i', (num, expected) => {
    expect(phi(num)).toBe(expected)
  })
})
