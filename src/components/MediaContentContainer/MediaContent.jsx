import React from "react";
import Picture from "./Picture";
import Video from "./Video";

const MediaContent = ({ mediaType, description, title, url }) => {
  switch (mediaType) {
    case "image":
      return <Picture description={description} title={title} url={url} />;
    case "video":
      return <Video description={description} title={title} url={url} />;
    default:
      return "Loading";
  }
};

export default MediaContent;
