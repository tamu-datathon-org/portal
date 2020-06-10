import React from "react";
import { CardInterface } from "../Set/interfaces";
import { format_time } from "./helper";
import { Reminder } from "./Reminder";
import * as UI from "./style";

export const Card: React.FC<CardInterface> = ({ event }) => {
  return (
    <UI.StyledCard>
      <UI.Event_img_container>
        <UI.Event_img src={event.img_url} alt="" />
        <Reminder start_time={event.start_time} duration={event.duration} />
      </UI.Event_img_container>
      <UI.Event_info>
        <UI.Event_title>{event.title}</UI.Event_title>
        <UI.Event_time>
          {format_time(event.start_time, event.duration)}
        </UI.Event_time>
        <UI.Event_info_link_container>
          <UI.Event_info_link href={event.info_url || "#"}>
            Learn more <i className="fas fa-arrow-right"></i>
          </UI.Event_info_link>
        </UI.Event_info_link_container>
      </UI.Event_info>
    </UI.StyledCard>
  );
};
