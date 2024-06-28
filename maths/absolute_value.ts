/**
/**
 * @description Takes a number as input and returns its absolute value, i.e., either
 * the original number if it is positive, or the opposite number if it is negative,
 * after converting it to positive via double negation.
 * 
 * @param { number } number - numerical value that is converted to positive or negative
 * depending on its sign.
 * 
 * @returns { number } the absolute value of the input number.
 */
export const absoluteValue = (number: number): number => {
  // if input number is less than 0, convert it to positive via double negation
  // e.g. if n = -2, then return -(-2) = 2
  return number < 0 ? -number : number
}
