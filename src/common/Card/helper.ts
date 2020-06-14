import moment from "moment";

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

  return (
    moment(time).format("MMMM Do h:mm a") +
    " to " +
    moment(new Date(time.getTime() + duration * 60000)).format("h:mm a")
  );
};
