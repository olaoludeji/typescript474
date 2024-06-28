/**
/**
 * @description Checks if a given year is a leap year by verifying whether it is
 * divisible by 4 and either 100 or 400, excluding years that are less than or equal
 * to zero.
 * 
 * @param { number } year - 4-digit year for which the function checks if it is a
 * leap year according to the conditions specified in the code.
 * 
 * @returns { boolean } a boolean value indicating whether the given year is a leap
 * year.
 */
export const isLeapYear = (year: number): boolean => {
  if (year <= 0 || !Number.isInteger(year)) {
    throw new Error('year must be a natural number > 0')
  }

  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}
