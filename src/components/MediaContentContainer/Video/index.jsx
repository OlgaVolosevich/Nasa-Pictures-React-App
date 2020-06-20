import React from "react";
import "./video.scss";

const Video = ({ url, title, description }) => {
  return (
    <div className="video">
      <h2>{title}</h2>
      <iframe
        className="video__video-area"
        title="title"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{description}</p>
    </div>
  );
};

export default Video;
