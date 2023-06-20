// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object

function getDayOfWeek(dateStr) {
  const date = new Date(dateStr);
  const dayOfWeek = date.getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return dayNames[dayOfWeek];
}

//  b. Implement the function to display the day of the week for the current date.
const days = getDayOfWeek(Date.now());
console.log(days);
