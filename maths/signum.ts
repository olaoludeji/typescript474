/**
 * @description Determines and returns the signum or nature of a given number. It
 * outputs `0` if the argument is zero, `1` if it is positive, `-1` if it is negative,
 * and `NaN` (Not a Number) if the argument has an invalid value.
 * 
 * @param { number } num - 3-way conditional branching of the function.
 * 
 * @returns { number } `NaN`.
 */
export const signum = (num: number) => {
  if (num === 0) return 0
  if (num > 0) return 1
  if (num < 0) return -1

  return NaN
}
