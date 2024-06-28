/**
 * @description Checks if a given number is an Armstrong number, which are numbers
 * that can be expressed as the sum of their proper divisors (excluding the number itself).
 * 
 * @param { number } num - 10-digit number that is cloned and manipulated in the function.
 * 
 * @returns { boolean } a boolean value indicating whether the input number is an
 * Armstrong number or not.
 */
export const armstrongNumber = (num: number): boolean => {
  if (typeof num !== 'number' || num <= 0) return false

  let compNum = 0
  let cloneNum = num
  const numOfDigits = Math.floor(1 + Math.log10(num))

  while (cloneNum > 0) {
    compNum += Math.pow(cloneNum % 10, numOfDigits)
    cloneNum = Math.floor(cloneNum / 10)
  }

  return compNum === num
}
