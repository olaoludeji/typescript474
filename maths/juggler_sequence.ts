/**
 * @description Takes a positive number `a` and its power (the result of multiplying
 * `a` by itself `k` times) as input, then iterates through the numbers from 0 to
 * `n-1`, modifies the value of `k` using a formula that depends on the parity of
 * `k`, and finally returns the modified value of `k`.
 * 
 * @param { number } a - starting value of the iterations.
 * 
 * @param { number } n - number of iterations that the code inside the function will
 * run for.
 * 
 * @returns { integer } an integer between 1 and 4, inclusive.
 */
export const jugglerSequence = (a: number, n: number) => {
  let k: number = a
  for (let i: number = 0; i < n; i++) {
    k = Math.floor(Math.pow(k, (k % 2 === 0 ? 1 : 3) / 2))
  }

  return k
}
