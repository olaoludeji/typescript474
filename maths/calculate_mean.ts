/**
/**
 * @description Takes an array of numbers and calculates its mean by reducing the
 * values to a single value, dividing it by the number of elements in the array.
 * 
 * @param { number[] } numbers - array that is being reduced and divided.
 * 
 * @returns { number } a float value representing the mean of the input `numbers` array.
 */
export const calculateMean = (numbers: number[]): number => {
  if (numbers.length < 1) {
    throw new TypeError('Invalid Input')
  }

  // This loop sums all values in the 'numbers' array using an array reducer
  const sum = numbers.reduce((sum, current) => sum + current, 0)

  // Divide sum by the length of the 'numbers' array.
  return sum / numbers.length
}
