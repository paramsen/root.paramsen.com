const months = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

export function shortFormat(date) {
    return months[date.getMonth()] .substr(0, 3)+ ' ' + date.getDate();
}