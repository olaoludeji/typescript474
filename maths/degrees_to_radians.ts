/** * A function to get radians from the degrees
/**
 * @description Converts a value represented in degrees to radians using the formula:
 * `(degrees * pi) / 180`.
 * 
 * @param { number } degrees - 360-degree angle in radians to which the given number
 * is to be converted.
 * 
 * @returns { number } a value in radians, obtained by multiplying the input degree
 * value by Pi and then dividing by 180.
 */
export const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180
}
