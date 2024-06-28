/**
 * @description Computes the number of divisors of a given positive integer `n`,
 * excluding the integer itself.
 * 
 * @param { number } n - number that is being squared in the function.
 * 
 * @returns { number } the largest perfect square divisor of a given number.
 */
export const phi = (n: number): number => {
  let result: number = n
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      while (n % i == 0) n = n / i
      result -= Math.floor(result / i)
    }
  }
  if (n > 1) result -= Math.floor(result / n)

  return result
}
