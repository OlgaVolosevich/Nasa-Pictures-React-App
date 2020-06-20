import React from "react";

const Picture = ({ title, url, description }) => {
  return (
    <div className="picture-wrapper">
      <h3>{title}</h3>
      <img src={url} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default Picture;
