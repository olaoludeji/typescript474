/**
 * @description Generates a list of non-negative integer numbers up to a given input
 * value using a recursive formula.
 * 
 * @param { number } n - number of hexagonal numbers to be generated in the function.
 * 
 * @returns { number[] } an array of non-negative integers, each corresponding to a
 * hexagonal number.
 */
export const HexagonalNumbers = (n: number): number[] => {
  if (isNaN(n)) throw new Error('The input needs to be a number')
  if (!Number.isInteger(n) || n < 0)
    throw new Error('The input needs to be a non-negative integer')
  const hexagonalNumbers = []

  for (let i = 1; i <= n; i++) {
    hexagonalNumbers.push(i * (2 * i - 1))
  }

  return hexagonalNumbers
}
