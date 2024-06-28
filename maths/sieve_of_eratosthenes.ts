/**
/**
 * @description 1. Initializes an array of boolean values to filter out prime numbers,
 * and  2. Iterates over the numbers from 2 to n using a nested loop to mark as
 * composite (not prime) all multiples of each number found in step 1. The result is
 * an array of prime numbers in descending order.
 * 
 * @param { number } n - integer value that the sieve of Eratosthenes will be applied
 * to, with non-negative and integers-only values being accepted.
 * 
 * @returns { number[] } an array of prime numbers up to the input value `n`.
 */
export function sieveOfEratosthenes(n: number): number[] {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('Only natural numbers are supported')
  }
  const numbers = new Array<boolean>(n + 1).fill(true)
  const primeNumbers: number[] = []
  for (let i = 2; i <= n; i++) {
    if (numbers[i]) {
      primeNumbers.push(i)
      for (let j = i + i; j <= n; j += i) {
        numbers[j] = false
      }
    }
  }
  return primeNumbers
}
