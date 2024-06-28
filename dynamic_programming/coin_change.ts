export interface CoinChange {
  minCoins: number
  coins: number[]
}

/**
 * @description Calculates the minimum number of coins required to make a given amount
 * of money using dynamic programming. It fills a two-dimensional table with values,
 * then uses recursion to find the optimal coin combinations for each row in the
 * table. The final output is an object with a `minCoins` property representing the
 * minimum number of coins needed and a `coins` property containing the sequence of
 * coins used to make the money.
 * 
 * @param { number } money - amount of money that needs to be changed into coins.
 * 
 * @param { number[] } coins - array of coins available for change, which is used to
 * determine the minimum number of coins required to make up the desired amount of money.
 * 
 * @returns { CoinChange } an object containing the minimum number of coins required
 * to make change for a given amount of money, along with an array of the coins needed.
 */
export const coinChange = (money: number, coins: number[]): CoinChange => {
  const minCoins: number[] = Array(money + 1).fill(Infinity)
  const lastCoin: number[] = Array(money + 1).fill(-1)

  minCoins[0] = 0

  // Fill in the DP table
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j <= money; j++) {
      if (j >= coins[i]) {
        if (minCoins[j] > 1 + minCoins[j - coins[i]]) {
          minCoins[j] = 1 + minCoins[j - coins[i]]
          lastCoin[j] = coins[i]
        }
      }
    }
  }

  const res: CoinChange = {
    minCoins: minCoins[money],
    coins: []
  }

  let total: number = money
  while (total > 0) {
    res.coins.push(lastCoin[total])
    total -= lastCoin[total]
  }

  return res
}
