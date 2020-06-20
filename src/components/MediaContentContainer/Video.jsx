import React from "react";

const Video = ({ url, title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <iframe
        title="title"
        width="560"
        height="315"
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
