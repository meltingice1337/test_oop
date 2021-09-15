export const isLongitude = (num: number): boolean =>
  isFinite(num) && Math.abs(num) <= 180;

export const isLatitude = (num: number): boolean =>
  isFinite(num) && Math.abs(num) <= 90;

export const isValidUrl = (url: string): boolean =>
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
    url
  );
