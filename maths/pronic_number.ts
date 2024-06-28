/**
 * @description Takes a non-negative integer `n`, and checks if it is a pronic number
 * (i.e., a number that can be expressed as $a^2b$, where $a$ and $b$ are integers).
 * If the input meets the condition, the function returns `true`. Otherwise, an error
 * message is thrown.
 * 
 * @param { number } n - non-negative integer that the function will check if it
 * satisfies certain conditions to return `true`.
 * 
 * @returns { boolean } a boolean value indicating whether the input number is a
 * non-negative integer.
 */
const pronicNumber = (n: number) => {
  if (isNaN(n)) throw new Error('The input needs to be a number')
  if (!Number.isInteger(n) || n < 0)
    throw new Error('The input needs to be a non-negative integer')
  if (n === 0) return true

  return (
    !Number.isInteger(Math.sqrt(n)) &&
    Math.floor(Math.sqrt(n)) * Math.ceil(Math.sqrt(n)) === n
  )
}

export { pronicNumber }
