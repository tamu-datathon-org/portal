import { ActivityCardProps } from "../common/Card/interfaces";
import { ActivitySection } from "../common/Set/interfaces";

// make dummy events
const eventCard: ActivityCardProps = {
  event: {
    title: "Data Science 101",
    startTime: new Date("June 24, 2020 12:45:00"),
    duration: 60,
    infoUrl: "#",
    imgUrl:
      "https://www.themanufacturer.com/wp-content/uploads/2016/08/stock-market.jpg",
  },
};

const set1Events: Array<ActivityCardProps> = [eventCard];
for (let i = 0; i < 5; i++) {
  set1Events.push(eventCard);
}

export const set1Info: ActivitySection = {
  eventList: set1Events,
  sectionTitle: "Get started with Data Science",
  sectionDescription:
    "New to Data Science? Attend these live classes to improve your skills!",
  defaultShowMoreState: false,
};

// make second set from first with some changes
const set2Images = [
  "https://cdn.arstechnica.net/wp-content/uploads/2020/06/calTOP-800x532.jpg",
  "https://cdn.arstechnica.net/wp-content/uploads/2020/06/short_term_temp_prediction_brown_caldeira-3-800x364.jpg",
  "https://cdn.arstechnica.net/wp-content/uploads/2020/06/seti-antenna-800x534.jpg",
  "https://cdn.arstechnica.net/wp-content/uploads/2020/06/coronavirus-1536x1097-800x571.jpg",
  "https://cdn.arstechnica.net/wp-content/uploads/2020/06/nasa_iss059e000517_lrg-800x533.jpg",
];
const set2Titles = [
  "Data Science for Physicists",
  "Climate Modeling with R",
  "Exoplanet Exploration with R",
  "Epidemiology & Mitigation with Python",
  "Geology and Data Science",
];
const set2Times = [
  "June 26, 2020 12:45:00",
  "June 27, 2020 12:45:00",
  "June 28, 2020 12:45:00",
  "June 29, 2020 12:45:00",
  "June 30, 2020 12:45:00",
].map((item) => new Date(item));

const set2Events: Array<ActivityCardProps> = [];
for (let i = 0; i < 5; i++) {
  set2Events.push({
    event: {
      title: set2Titles[i] || "...",
      startTime: set2Times[i],
      duration: 60,
      infoUrl: "#",
      imgUrl: set2Images[i] || "#",
    },
  });
}

export const set2Info: ActivitySection = {
  eventList: set2Events,
  sectionTitle: "Industry Expert Lectures",
  sectionDescription:
    "These workshops feature talks given by Data Science experts.",
  defaultShowMoreState: false,
};
