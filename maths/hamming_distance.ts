/**
 * @description Computes the Hamming distance between two strings by counting the
 * number of positional differences.
 * 
 * @param { string } str1 - first string to be compared for equality with the second
 * string `str2`.
 * 
 * @param { string } str2 - 2nd string to be compared with the 1st string.
 * 
 * @returns { integer } the number of positions at which the two input strings differ.
 */
const hammingDistance = (str1: string, str2: string) => {
  if (str1.length !== str2.length)
    throw new Error('Strings must of the same length.')

  let dist = 0

  for (let i = 0; i < str1.length; i++) if (str1[i] !== str2[i]) dist++

  return dist
}

export { hammingDistance }
