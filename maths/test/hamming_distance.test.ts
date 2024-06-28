import { hammingDistance } from '../hamming_distance'

/**
 * @description Calculates and compares the Hamming distance between two strings,
 * returning `true` if they are equal, and `false` otherwise.
 * 
 * @param { string } str1 - ﬁrst string to be compared with the `str2` parameter for
 * hamming distance calculation, resulting in the `result` output.
 * 
 * @param { string } str2 - 2nd string to be compared with `str1`.
 * 
 * @param { number } result - 𝜊 value expected by the function.
 */
test.each([
  ['happy', 'homie', 4],
  ['hole', 'home', 1],
  ['cathrine', 'caroline', 3],
  ['happiness', 'dizziness', 4]
])('Hamming Distance', (str1, str2, result) => {
  expect(hammingDistance(str1, str2)).toBe(result)
})
