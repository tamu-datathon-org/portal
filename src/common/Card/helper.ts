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

/**
 * Formats date to a string for the start and end time.
 * @param time a date object
 * @param duration a number in minutes
 */
export const formatTime = (time: Date, duration: number): string => {
  /**
   * returns string in HH:MM(AM/PM) format
   * @param time a date object
   */
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
