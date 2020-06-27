import React from "react";
import * as UI from "./style";

export interface MediaProps {
  type: string;
  link?: string;
}

const getLink = () => {
  return "https://www.youtube.com/embed/5qap5aO4i9A";
};

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
  } else {
    return <></>;
  }
};
