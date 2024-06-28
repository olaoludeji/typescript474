/** * A function to get degrees from the radians
/**
 * @description Multiplies a given value in radians by 180 and then divides the result
 * by Math.PI to convert it into degrees.
 * 
 * @param { number } radians - angular value to be converted to degrees.
 * 
 * @returns { number } a decimal value between 0 and 360, representing the equivalent
 * degree measurement of the input radian value.
 */
export const radiansToDegrees = (radians: number): number => {
  return (radians * 180) / Math.PI
}
