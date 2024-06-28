/**
 * @description Generates all possible combinations of a given number `n` of elements
 * taken `k` at a time. It uses a recursive approach to generate the combinations and
/**
 * @description Takes three parameters: `n`, `k`, and `startCursor`. It generates all
 * possible combinations of `k` elements from an array of size `n`, starting from the
 * `startCursor`. The combinations are stored in an array `combinationsAcc`.
 * 
 * @param { number } n - total number of elements in the sequence for which combinations
 * are to be generated.
 * 
 * @param { number } k - number of elements to be selected from a total pool of `n`
 * elements in generating all possible combinations.
 * 
 * @param { number } startCursor - 0-based index of the first element to include in
 * each combination.
 * 
 * @returns { number[][] } an array of all possible combinations of a given number
 * of elements from a larger array.
 */
export function generateCombinations(n: number, k: number): number[][] {
  const combinationsAcc: number[][] = []
  const currentCombination: number[] = []

  function generateAllCombos(
    n: number,
    k: number,
    startCursor: number
  ): number[][] {
    if (k === 0) {
      if (currentCombination.length > 0) {
        combinationsAcc.push(currentCombination.slice())
      }
      return combinationsAcc
    }

    const endCursor = n - k + 2
    for (let i = startCursor; i < endCursor; i++) {
      currentCombination.push(i)
      generateAllCombos(n, k - 1, i + 1)
      currentCombination.pop()
    }
    return combinationsAcc
  }

  return generateAllCombos(n, k, 1)
}
