import { factorial } from './factorial'
/**
/**
 * @description Calculates the binomial coefficient of a given number `n` and a
 * parameter `k`. It returns the coefficient value if `k` is greater than or equal
 * to `n`, or 0 otherwise.
 * 
 * @param { number } n - total number of integers that are chosen at random from a
 * given set.
 * 
 * @param { number } k - number of items selected from the set, and its value determines
 * whether the result is zero or not.
 * 
 * @returns { number } a non-negative number representing the binomial coefficient.
 */
export const binomialCoefficient = (n: number, k: number): number => {
  // Check if k is larger than n or negative
  if (k > n || k < 0) {
    return 0
  }

  // Calculate the binomial coefficient using the implemented factorial
  const numerator = factorial(n)
  const denominator = factorial(k) * factorial(n - k)
  return numerator / denominator
}
