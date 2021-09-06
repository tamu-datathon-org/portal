// endTime = startTime + durationMS
// https://stackoverflow.com/a/1214753
export const genEndTime = (startTime: Date, duration: number): Date => {
  const durationMS = duration * 60000;
  return new Date(startTime.getTime() + durationMS);
};
