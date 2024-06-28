/**
/**
 * @description Solves a puzzle by evaluating strings of parentheses based on the
 * given number of open and closed parentheses. It recursively calls itself until a
 * solution is found or there are no more possibilities left to explore.
 * 
 * @param { number } n - number of open parentheses to be balanced in the given string.
 * 
 * @returns { string[] } an array of strings representing possible valid parenthetic
 * combinations.
 */
const generateParentheses = (n: number): string[] => {
  const result: string[] = []

  /**
   * @description Takes a string `chars`, an integer `openParentheses`, and an integer
   * `closedParentheses`. It checks if there are enough parentheses to match the given
   * input, and returns the resulting string if it can be solved, or calls itself
   * recursively if not.
   * 
   * @param { string } chars - string to be parsed for matching parentheses.
   * 
   * @param { number } openParentheses - number of unmatched open parentheses in the
   * given string.
   * 
   * @param { number } closedParentheses - number of matching closing parentheses in
   * the given input string.
   * 
   * @returns { array } a list of strings that can be used to form a valid parenthetical
   * expression.
   */
  const solve = (
    chars: string,
    openParentheses: number,
    closedParentheses: number
  ) => {
    if (openParentheses === n && closedParentheses === n) {
      result.push(chars)
      return
    }

    if (openParentheses <= n) {
      solve(chars + '(', openParentheses + 1, closedParentheses)
    }

    if (closedParentheses < openParentheses) {
      solve(chars + ')', openParentheses, closedParentheses + 1)
    }
  }

  solve('', 0, 0)

  return result
}

export { generateParentheses }
