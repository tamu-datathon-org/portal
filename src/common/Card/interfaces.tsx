export interface Activity {
  imgUrl: string;
  title: string;
  startTime: string;
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
