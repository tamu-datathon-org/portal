export interface Event {
  img_url: string;
  title: string;
  start_time: Date;
  duration: number;
  info_url?: string;
}

export interface CardInterface {
  event: Event;
}

export interface ActivitySection {
  event_list: Array<CardInterface>;
  section_title: string;
  section_description: string;
}

export interface Section {
  info: ActivitySection;
}

export interface ReminderInterface {
    start_time: Date;
    duration: number;
}