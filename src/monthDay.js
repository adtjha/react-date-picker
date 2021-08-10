export function monthDay(m, y) {
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let first;
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const monthArray = [];

  const offset = ["", "", "", "", "", ""];
  const dateString = months[m - 1] + " " + 1 + ", " + y;

  const date = new Date(dateString);
  // find offset, and fit in array
  first = date.getDay();
  if (first !== 0) {
    monthArray.push(...offset.slice(0, first));
  }

  // push in other days
  monthArray.push(...days);

  // remove unwanted days
  if (m % 2 === 0) {
    if (m === 2) {
      if ((0 === y % 4 && 0 !== y % 100) || 0 === y % 400) {
        monthArray.pop();
      } else {
        monthArray.pop();
        monthArray.pop();
      }
    }
    monthArray.pop();
  }

  console.log(first, dateString);

  return monthArray;
}
