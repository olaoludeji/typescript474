import { calculateMedian } from '../calculate_median'

/**
 * @description Calculates the median of an array of numbers using a recursive approach.
 * It validates the input and returns the calculated median value.
 */
describe('Tests for CalculateMedian', () => {
  it('should be a function', () => {
    expect(typeof calculateMedian).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => calculateMedian([])).toThrowError(
      'Input array must contain at least one number.'
    )
  })

  it('should return the median of an array of numbers - even length', () => {
    const medianFunction = calculateMedian([1, 2, 3, 4])
    expect(medianFunction).toBe(2.5)
  })

  it('should return the median of an array of numbers - odd length', () => {
    const medianFunction = calculateMedian([1, 2, 3, 4, 6, 8, 9])
    expect(medianFunction).toBe(4)
  })
})
