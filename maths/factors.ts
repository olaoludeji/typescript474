/**
 * @description Takes a positive integer `num` as input and returns a Set containing
 * all factors (including itself and multipliers) of that number in the form of a
 * list of integers.
 * 
 * @param { number } num - natural number that determines which factors will be found
 * and added to the resulting set.
 * 
 * @returns { Set<number> } a set of natural numbers that are factors of the input number.
 */
export const findFactors = (num: number): Set<number> => {
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error('Only natural numbers are supported.')
  }

  const res: Set<number> = new Set()
  // Iterates from 1 to square root of num & pushes factors into the res set.
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      res.add(i)

      const sqrtFactor = Math.floor(num / i)
      res.add(sqrtFactor)
    }
  }

  return res
}
