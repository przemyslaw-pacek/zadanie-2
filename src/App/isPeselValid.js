function isPeselValid(pesel) {
  if (!/^\d{11}$/.test(pesel)) return false;

  const digit = pesel.split("").map(Number);
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const sum = weights.reduce((acc, v, i) => acc + v * digit[i], 0);
  if ((10 - (sum % 10)) % 10 !== digit[10]) return false;

  const yy = digit[0] * 10 + digit[1];
  let mm = digit[2] * 10 + digit[3];
  const dd = digit[4] * 10 + digit[5];

  let year;
  if (mm >= 1 && mm <= 12) year = 1900 + yy;
  else if (mm >= 81 && mm <= 92) {
    year = 1800 + yy;
    mm -= 80;
  } else if (mm >= 21 && mm <= 32) {
    year = 2000 + yy;
    mm -= 20;
  } else return false;

  const date = new Date(year, mm - 1, dd);
  if (
    date.getFullYear() !== year ||
    date.getMonth() + 1 !== mm ||
    date.getDate() !== dd
  )
    return false;

  return true;
}

export default isPeselValid;
