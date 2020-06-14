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
export const formatTime = (time: Date, duration: number): string => {
  // Input: Date object
  // Output: String in format HH:MM(AM/PM)
  const stringify = (time: Date): string => {
    const hours: number = time.getHours();
    const meridiem: string = hours > 11 ? "PM" : "AM";
    let minutes: string = time.getMinutes().toString();
    if (minutes.length < 2) minutes = "0" + minutes;
    const hourStr: string = hours % 12 == 0 ? "12" : (hours % 12).toString();

    return hourStr + ":" + minutes + meridiem;
  };

  return (
    months[time.getMonth()] +
    " " +
    time.getDate() +
    " " +
    stringify(time) +
    " to " +
    stringify(new Date(time.getTime() + duration * 60000))
  );
};
