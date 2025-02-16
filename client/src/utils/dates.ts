export const formatDateToLocale = (stringDate: number) => {
  const date = new Date(stringDate);

  const formattedDate: string = date.toLocaleString('en-US', {
    weekday: 'long', // e.g., "Monday"
    year: 'numeric', // e.g., "2023"
    month: 'long', // e.g., "January"
    day: 'numeric', // e.g., "8"
    hour: '2-digit', // e.g., "14"
    minute: '2-digit', // e.g., "05"
    hour12: false, // Ensures 24-hour format
  });

  return formattedDate;
};
