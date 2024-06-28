import { signum } from '../signum'

/**
 * @description Expects a number `num` and a related expectation `expected`, checks
 * whether `signum(num)` is equal to `expected`.
 * 
 * @param { number } num - number that will be sign-coded.
 * 
 * @param { number } expected - expected sign of the value passed as the `num` argument
 * to the function, which is compared to the result of the `signum()` function to
 * determine if the input value is positive, negative, or zero.
 */
test.each([
  [10, 1],
  [0, 0],
  [-69, -1],
  [NaN, NaN]
])('The sign of %i is %i', (num, expected) => {
  expect(signum(num)).toBe(expected)
})
