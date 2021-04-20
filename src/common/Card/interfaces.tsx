import { ActivityInfoProps } from "../ActivityInfo";

export interface ActivityCardProps {
  event: ActivityInfoProps;
}

export interface ReminderProps {
  startTime: Date;
  duration: number;
}
