/**
/**
 * @description Determines whether a given number is square-free by recursively
 * dividing it by smaller numbers and checking if it is divisible. If the number is
 * not square-free, the function returns false.
 * 
 * @param { number } n - natural number to be tested for being a perfect square.
 * 
 * @returns { boolean } a boolean indicating whether the input number is square-free.
 */
export const isSquareFree = (n: number): boolean => {
  if (n < 0) throw new Error('number must be a natural number > 0')
  if (n % 2 === 0) n = n / 2
  if (n % 2 === 0) return false

  for (let i: number = 3; i <= Math.sqrt(n); i = i + 2) {
    if (n % i === 0) {
      n = n / i
      if (n % i === 0) return false
    }
  }
  return true
}
