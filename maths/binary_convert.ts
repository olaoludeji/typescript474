/**
/**
 * @description Takes a number as input and returns its binary representation as a
 * string, computed by iteratively multiplying the number by 2, taking the remainder,
 * and adding it to the resulting binary representation until the number is 0.
 * 
 * @param { number } num - binary number being generated, which is calculated by
 * iteratively adding a digit based on the remainder of `num` divided by 2 until `num`
 * is zero.
 * 
 * @returns { string } a string representation of the binary equivalent of the given
 * number.
 */
export const binaryConvert = (num: number): string => {
  let binary = ''

  while (num !== 0) {
    binary = (num % 2) + binary
    num = Math.floor(num / 2)
  }

  return binary
}
