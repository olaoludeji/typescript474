/**
 * @description Calculates the result of adding two binary numbers, represented as
 * strings of digits, by performing a iterative approach where both numbers are used
 * to calculate the next digit in the result. The function returns the final result
 * as a string of digits.
 * 
 * @param { string } firstBinaryNo - 1-based index of the first binary number to be
 * added.
 * 
 * @param { string } secondBinaryNo - 2nd binary number to be added to the first
 * binary number.
 * 
 * @returns { string } a string representing the sum of two binary numbers, calculated
 * according to the rules of binary addition.
 */
export function addBinary(
  firstBinaryNo: string,
  secondBinaryNo: string
): string {
  let lengthOfFirstNumber: number = firstBinaryNo.length - 1
  let lengthOfSecondNumber: number = secondBinaryNo.length - 1
  const solution: string[] = []
  let carry: number = 0

  while (lengthOfFirstNumber >= 0 || lengthOfSecondNumber >= 0) {
    let sum: number = carry
    if (lengthOfFirstNumber >= 0)
      sum += parseInt(firstBinaryNo.charAt(lengthOfFirstNumber))
    if (lengthOfSecondNumber >= 0)
      sum += parseInt(secondBinaryNo.charAt(lengthOfSecondNumber))
    solution.push((sum % 2).toString())
    carry = Math.floor(sum / 2)
    lengthOfFirstNumber--
    lengthOfSecondNumber--
  }

  if (carry !== 0) solution.push(carry.toString())

  return solution.reverse().join('')
}
