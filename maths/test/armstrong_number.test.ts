import { armstrongNumber } from '../armstrong_number'

/**
 * @description Takes a number `num` and its expected Armstrong number as input,
 * expecting them to be equal.
 * 
 * @param { number } num - 3-digit number that is being tested to determine if it is
 * an Armstrong number.
 * 
 * @param { number } expected - 10-digit number that is expected to be passed to the
 * `armstrongNumber()` function.
 */
test.each([
  [9, true],
  [-310, false],
  [0, false],
  [407, true],
  [420, false],
  [92727, true],
  [13579, false]
])('i is an Armstrong number or not', (num, expected) => {
  expect(armstrongNumber(num)).toBe(expected)
})
