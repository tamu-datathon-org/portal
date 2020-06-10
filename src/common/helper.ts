// just a list of all months in order
const months = [
  "January",
  "February",
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

// Input: Date object, duration (minutes)
// Output: Formatted string for start time and end time of an event
export const format_time = (time: Date, duration: number): string => {
  // Input: Date object
  // Output: String in format HH:MM(AM/PM)
  const start_time = (time: Date): string => {
    let hours = time.getHours();
    let meridiem = hours > 11 ? "PM" : "AM";
    let minutes = time.getMinutes().toString();
    if (minutes.length < 2) minutes = "0" + minutes;
    let hours_str = hours % 12 == 0 ? "12" : (hours % 12).toString();

    return hours_str + ":" + minutes + meridiem;
  };

  const end_time = (time: Date, duration: number): string => {
    let end_time = new Date(time.getTime() + duration * 60000);
    return start_time(end_time);
  };

  return (
    months[time.getMonth()] +
    " " +
    time.getDate() +
    " " +
    start_time(time) +
    " to " +
    end_time(time, duration)
  );
};
