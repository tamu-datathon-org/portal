import React from "react";
import fs from "graceful-fs";
import * as UI from "./style";

const getLink = async () => {
  const file = "db/activities/data_science_101.md";
  if (fs.existsSync(file)) {
    const fileContent = await fs.promises.readFile(file, "utf8");
  }
  return "https://www.youtube.com/embed/5qap5aO4i9A";
};

export interface MediaProps {
  type: string;
  link: string;
}

export const Media: React.FC<MediaProps> = (props: MediaProps) => {
  const link = getLink();
  if (props.type === "youtube") {
    return (
      <>
        <UI.MediaContainer>
          <UI.YtMedia
            src={link.toString()}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></UI.YtMedia>
        </UI.MediaContainer>
      </>
    );
  } else if (props.type == "zoom") {
    let callOngoing: boolean = true;
    let callStatus: string, callDescription: string;
    let joinBtn;

    if (callOngoing) {
      callStatus = "The Zoom Call has Started";
      callDescription = `Click Join to join in on the discussion. Can't make it? Don't worry,
      a VOD will show up here afterwards.`;
      joinBtn = (
        <UI.Button href={link.toString()}>
          <UI.BtnText>Join Now</UI.BtnText>
        </UI.Button>
      );
    } else {
      callStatus = "The Zoom Call will start at 10:30AM";
      callDescription = `Stay tuned for the meeting by clicking on the 'Mark me interested' button! Can't make it? Don't worry,
      a VOD will show up here afterwards.`;
      joinBtn = <></>;
    }
    return (
      <>
        <UI.ZoomContainer>
          <UI.InfoContainer>
            <h3>{callStatus}</h3>
            {callDescription}
          </UI.InfoContainer>
          <UI.Flexbox>{joinBtn}</UI.Flexbox>
        </UI.ZoomContainer>
      </>
    );
  } else {
    return <></>;
  }
};
