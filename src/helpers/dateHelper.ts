export const addDays = (date: Date, days: number, midnight: boolean): Date => {
  const newDate = new Date(date.getTime() + days * (24 * 60 * 60 * 1000));

  if (midnight) {
    newDate.setUTCHours(0, 0, 0, 0);
  }

  return newDate;
};
