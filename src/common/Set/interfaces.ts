import { ActivityCardProps } from "../Card";

export interface ActivitySection {
  eventList: Array<ActivityCardProps>;
  sectionTitle: string;
  sectionDescription: string;
  orderedBy?: string;
  filteredBy?: string;
  defaultShowMoreState?: boolean;
}

export interface SetProps {
  info: ActivitySection;
}
export interface ShowMoreBtnInterface {
  visible: boolean;
  text: string;
  triggerFunction: void;
}
