/**
 * @description Generates a map containing the number of times each prime factor
 * occurs from 2 to the given integer `n`.
 * 
 * @param { number } n - 2-digit number whose prime factors are to be found and stored
 * in the returned map.
 * 
 * @returns { Map<number, number> } a `Map` object containing the factors of the input
 * number.
 */
export const factorize = (n: number): Map<number, number> => {
  const result: Map<number, number> = new Map()

  for (let i = 2; i * i <= n; i++) {
    while (n % i == 0) {
      let occurence = result.get(i)
      if (!occurence) occurence = 0
      result.set(i, occurence + 1)
      n = n / i
    }
  }
  if (n > 1) {
    let occurence = result.get(n)
    if (!occurence) occurence = 0
    result.set(n, occurence + 1)
  }

  return result
}
