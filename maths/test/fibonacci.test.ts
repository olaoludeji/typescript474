import {
  nthFibonacciUsingFormula,
  nthFibonacci,
  nthFibonacciRecursively
} from '../fibonacci'

/**
 * @description Runs tests on a provided function, passing in various arguments and
 * comparing the result to an expected value.
 * 
 * @param { (n: number) => number } func - code that needs to be documented.
 * 
 * @returns { number } a series of pairs of integers `n` and the corresponding value
 * of `func(n)`, which are used to assert that `func` returns the correct values for
 * each input.
 */
const test = (func: (n: number) => number) =>
  it.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [5, 5],
    [10, 55],
    [15, 610]
  ])('fib(%i) = %i', (n, expected) => expect(func(n)).toBe(expected))
describe('Fibonacci iterative', () => test(nthFibonacci))
describe('Fibonacci recursive', () => test(nthFibonacciRecursively))
describe('Fibonacci Using formula', () => test(nthFibonacciUsingFormula))
