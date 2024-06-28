/**
/**
 * @description Calculates and returns the longest common subsequence between two
 * given strings by filling a 2D array with the lengths of the subsequence, reconstructing
 * the subsequence from the array, and joining the elements into a single string.
 * 
 * @param { string } text1 - 1st string for which the longest common subsequence is
 * to be calculated.
 * 
 * @param { string } text2 - 2nd string to find the longest common suffix with, and
 * it is used to compute the lengths of the longest common subsequence (LCS) between
 * the 2 strings by comparing its characters with those of the `text1` parameter.
 * 
 * @returns { string } a string representing the longest common subsequence between
 * two given strings.
 */
export const longestCommonSubsequence = (
  text1: string,
  text2: string
): string => {
  const m = text1.length
  const n = text2.length

  // Create a 2D array to store the lengths of LCS
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  )

  // Fill in the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  // Reconstruct the LCS from the DP table
  let i = m
  let j = n
  const lcs: string[] = []
  while (i > 0 && j > 0) {
    if (text1[i - 1] === text2[j - 1]) {
      lcs.unshift(text1[i - 1])
      i--
      j--
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--
    } else {
      j--
    }
  }

  return lcs.join('')
}
