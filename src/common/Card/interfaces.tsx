export interface Activity {
  imgUrl: string;
  title: string;
  startTime: Date;
  endTime?: Date;
  duration: number;
  infoUrl: string;
}

export interface ActivityCardProps {
  event: Activity;
}

export interface ReminderProps {
  startTime: Date;
  duration: number;
}
