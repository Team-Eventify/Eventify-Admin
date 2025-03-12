const pad = (num: number) => num.toString().padStart(2, '0');

export const utcToLocal = (utcTime: number): string => {
  const date = new Date(utcTime);
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};