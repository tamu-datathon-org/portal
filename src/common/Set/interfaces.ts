export interface Event {
  imgUrl: string;
  title: string;
  startTime: Date;
  duration: number;
  infoUrl: string;
}

export interface CardInterface {
  event: Event;
}

export interface ActivitySection {
  eventList: Array<CardInterface>;
  SectionTitle: string;
  sectionDescription: string;
}

export interface Section {
  info: ActivitySection;
}

export interface ReminderInterface {
  startTime: Date;
  duration: number;
}
