/**
 * Calculates the number of months between a given date and the current date, rounding up
 * @returns {number} Number of months rounded up
 */
export const getMonthsSince = () => {
  const currentDate = new Date();
  const givenDate = new Date('2024-08-03');

  // Calculate the difference in months
  const months =
    (currentDate.getFullYear() - givenDate.getFullYear()) * 12 +
    (currentDate.getMonth() - givenDate.getMonth());

  // If there are remaining days in the current month, round up
  if (currentDate.getDate() > givenDate.getDate()) {
    return months + 1;
  }

  return months;
};
