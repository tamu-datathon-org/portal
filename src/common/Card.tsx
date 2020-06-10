import React from "react";
import { CardInterface } from "./interfaces";
import { format_time } from "./helper";
import { Reminder } from "./Reminder";
import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  overflow: hidden;
  @media only screen and (max-width: 1200px) {
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    overflow: hidden;
    margin: 0.5em;
    min-width: max-content;
  }
`;

export const Event_img_container = styled.div`
  position: relative;
  width: 100%;
  height: 145px;
  background-color: #f7ffe1;
  overflow: hidden;
`;

export const Event_img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Event_info = styled.div`
  padding: 0.75em;
`;

export const Event_title = styled.div`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 1.1em;
`;

export const Event_time = styled.div`
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
`;

export const Event_info_link_container = styled.div`
  text-align: right;
  margin-top: 0.75em;
`;

export const Event_info_link = styled.a`
  font-family: "Work Sans", sans-serif;
  text-decoration: none;
  font-weight: 700;
  background-image: linear-gradient(#c3e5ff 0%, #c3e5ff 100%);
  background-size: 100% 0.8em;
  background-repeat: no-repeat;
  background-position: 0px 6px;
  color: #00109b;
  padding: 0em 0em 0.25em 0.25em;
`;

export const Card: React.FC<CardInterface> = ({ event }) => {
  return (
    <StyledCard>
      <Event_img_container>
        <Event_img src={event.img_url} alt="" />
        <Reminder start_time={event.start_time} duration={event.duration} />
      </Event_img_container>
      <Event_info>
        <Event_title>{event.title}</Event_title>
        <Event_time>{format_time(event.start_time, event.duration)}</Event_time>
        <Event_info_link_container>
          <Event_info_link href={event.info_url || "#"}>
            Learn more <i className="fas fa-arrow-right"></i>
          </Event_info_link>
        </Event_info_link_container>
      </Event_info>
    </StyledCard>
  );
};
