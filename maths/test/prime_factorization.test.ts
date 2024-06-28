import { factorize } from '../prime_factorization'

interface TestCase {
  n: number
  expected: Map<number, number>
}

const cases: TestCase[] = [
  { n: 4, expected: new Map([[2, 2]]) },
  { n: 5, expected: new Map([[5, 1]]) },
  { n: 7, expected: new Map([[7, 1]]) },
  {
    n: 10,
    expected: new Map([
      [2, 1],
      [5, 1]
    ])
  },
  {
    n: 999,
    expected: new Map([
      [3, 3],
      [37, 1]
    ])
  },
  {
    n: 999999999999878,
    expected: new Map([
      [2, 1],
      [19, 1],
      [26315789473681, 1]
    ])
  }
]

/**
 * @description Performs an `each` test on a collection of test cases, where each
 * case consists of an `n` value and an expected prime factorization. The function
 * applies the `factorize()` function to the `n` value and compares the result to the
 * expected value.
 */
describe('factorize', () => {
  test.each(cases)(
    'prime factorization of $n should be $expected',
    ({ n, expected }) => {
      expect(factorize(n)).toEqual(expected)
    }
  )
})
