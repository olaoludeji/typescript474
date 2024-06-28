export enum Calendar {
  Gregorian,
  Julian
}

/**
 * @description Takes a year, month, and day as input, calculates the corresponding
 * weekday based on the given calendar (Gregorian or non-Gregorian), and returns it.
 * 
 * @param { number } year - 4-digit year value used in the calculation of the weekday,
 * ranging from 1 to 4 digits (0000 to 9999).
 * 
 * @param { number } month - 3-digit month number of the calendar system being used,
 * which can range from 1 to 12.
 * 
 * @param { number } day - 1st day of the month and ranges from 1 to 31, inclusive.
 * 
 * @param { Calendar } calendar - 4-year cycle of weeks and years used for computing
 * the weekday of a date, with different cycles for Gregorian and non-Gregorian calendars.
 * 
 * @returns { number } a number between 0 and 6, representing the day of the week.
 */
export const getWeekday = (
  year: number,
  month: number,
  day: number,
  calendar: Calendar = Calendar.Gregorian
): number => {
  // Input validation
  if (!Number.isInteger(year) || year < 1) {
    throw new Error('Year must be an integer greater than 0')
  }

  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error('Month must be an integer between 1 and 12')
  }

  if (!Number.isInteger(day) || day < 1 || day > 31) {
    throw new Error('Day must be an integer between 1 and 31')
  }

  // Move January and February to the end of the previous year
  if (month < 3) {
    month += 12
    year--
  }

  const century = Math.floor(year / 100)
  year %= 100

  let weekday: number | undefined = undefined
  if (calendar === Calendar.Gregorian) {
    weekday =
      (day +
        Math.floor(2.6 * (month + 1)) +
        year +
        Math.floor(year / 4) +
        Math.floor(century / 4) +
        5 * century) %
      7
  } else {
    weekday =
      (day +
        Math.floor(2.6 * (month + 1)) +
        year +
        Math.floor(year / 4) +
        5 +
        6 * century) %
      7
  }

  // Convert to Sunday being 0
  return (weekday + 6) % 7
}
