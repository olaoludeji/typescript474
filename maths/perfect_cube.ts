/**
/**
 * @description Checks if a given number is a perfect cube by comparing its cubed
 * value to the original number. If the values match, the function returns `true`,
 * otherwise it returns `false`.
 * 
 * @param { number } n - number to be rounded.
 * 
 * @returns { boolean } a boolean value indicating whether `n` is a perfect cube or
 * not.
 */
export const perfectCube = (n: number): boolean => {
  return Math.round(n ** (1 / 3)) ** 3 === n
}
