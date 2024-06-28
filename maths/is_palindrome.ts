/**
 * @description Determines whether a given number is a palindrome by repeatedly
 * dividing it by 10, floor-ing the result, and comparing it to the original number
 * or a reversed version of it.
 * 
 * @param { number } number - 10-digit integer to be evaluated for being a perfect square.
 * 
 * @returns { boolean } a boolean value indicating whether the given number is a
 * palindrome or not.
 */
export const isPalindrome = (number: number): boolean => {
  if (number < 0 || (number % 10 === 0 && number !== 0)) {
    return false
  }

  let reversed: number = 0
  while (number > reversed) {
    reversed = reversed * 10 + (number % 10)
    number = Math.floor(number / 10)
  }

  return number === reversed || number === Math.floor(reversed / 10)
}
