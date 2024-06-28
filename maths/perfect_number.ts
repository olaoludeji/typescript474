/**
/**
 * @description Determines whether a positive integer `n` is a perfect number, which
 * means it equals the sum of its proper divisors. The function iterates through each
 * divisor and adds it to `sum` if the number is not already included in the sum or
 * if it is equal to `n` modulo the current divisor. Finally, it checks if the result
 * is equal to `n`.
 * 
 * @param { number } n - integer value that the function is checking to be a perfect
 * square.
 * 
 * @returns { boolean } a boolean value indicating whether the given number is a
 * perfect number.
 */
export const isPerfectNumber = (n: number): boolean => {
  if (n <= 0 || !Number.isInteger(n)) {
    return false
  }
  let sum = 1
  const sqrt = Math.sqrt(n)
  for (let i = 2; i < sqrt; i++) {
    if (n % i === 0) {
      sum += i + n / i
    }
  }
  if (sqrt === Math.floor(sqrt)) {
    sum += sqrt
  }

  return sum === n
}
