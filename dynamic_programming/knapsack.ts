/**
/**
 * @description Computes the maximum value that can be achieved by including or
 * excluding items in a knapsack with limited capacity, based on their weights and values.
 * 
 * @param { number } capacity - 2D array that will store the calculated maximized
 * values or minimized values, with dimensions of weight and value, where the array
 * length indicates the number of items in the array.
 * 
 * @param { number[] } weights - 2D array of weights, where each weight is an integer
 * between 1 and capacity, and the lengths of both arrays are the same.
 * 
 * @param { number[] } values - 2D array containing the initial values for each
 * position in the resulting matrix.
 * 
 * @returns { number } the maximum value that can be achieved when a set of items
 * with different weights and values are packed into a knapsack of capacity `capacity`.
 */
export const knapsack = (
  capacity: number,
  weights: number[],
  values: number[]
): number => {
  if (weights.length !== values.length) {
    throw new Error(
      'Weights and values arrays should have the same number of elements'
    )
  }

  const numberOfItems: number = weights.length

  // Initializing a 2D array to store calculated states/values
  const dp: number[][] = new Array(numberOfItems + 1)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0))

  // Loop traversing each state of dp
  for (let itemIndex = 1; itemIndex <= numberOfItems; itemIndex++) {
    const weight = weights[itemIndex - 1]
    const value = values[itemIndex - 1]
    for (
      let currentCapacity = 1;
      currentCapacity <= capacity;
      currentCapacity++
    ) {
      if (weight <= currentCapacity) {
        // Select the maximum value of including the current item or excluding it
        dp[itemIndex][currentCapacity] = Math.max(
          value + dp[itemIndex - 1][currentCapacity - weight],
          dp[itemIndex - 1][currentCapacity]
        )
      } else {
        // If the current item's weight exceeds the current capacity, exclude it
        dp[itemIndex][currentCapacity] = dp[itemIndex - 1][currentCapacity]
      }
    }
  }

  // Return the final maximized value at the last position of the dp matrix
  return dp[numberOfItems][capacity]
}
