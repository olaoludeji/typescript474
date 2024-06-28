/**
/**
 * @description Verifies whether a given number is a perfect square.
 * 
 * @param { number } num - square root of the value provided to the function.
 * 
 * @returns { integer } a boolean value indicating whether the input number is a
 * perfect square.
 */
export const perfectSquare = (num: number) => {
  return Number.isInteger(Math.sqrt(num))
}
