/**
/**
 * @description Takes an array of numbers and returns their median value. It checks
 * if the input is valid, then calculates the median based on the parity of the number
 * of elements in the array.
 * 
 * @param { number[] } numbers - 0 or more values that are to be summed, with the
 * function returning their average value.
 * 
 * @returns { number } a number that represents the median of the input array of numbers.
 */
export const calculateMedian = (numbers: number[]): number => {
  if (numbers.length < 1) {
    throw new TypeError('Input array must contain at least one number.')
  }

  const totalNumbers = numbers.length

  if (totalNumbers % 2 === 0) {
    const index = totalNumbers / 2
    return (numbers[index - 1] + numbers[index]) / 2
  } else {
    const index = (totalNumbers + 1) / 2
    return numbers[index - 1]
  }
}
