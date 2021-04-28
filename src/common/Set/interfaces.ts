import { ActivityCardProps } from "../Card";

export interface ActivitySection {
  name: string;
  id: string;
  description: string;
  showMoreState: boolean;
  orderBy: "alphabetical" | "priority" | "start_time" | "none" | "" | undefined;
  filterBy: "happening_now" | undefined;
  priority: number;
  activityList: Array<string>;
  activityListPopulated: Array<ActivityCardProps>;
}

export interface SetProps {
  info: ActivitySection;
}
export interface ShowMoreBtnInterface {
  visible: boolean;
  text: string;
  triggerFunction: void;
}
