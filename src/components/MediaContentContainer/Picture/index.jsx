import React from "react";
import "./picture.scss";

const Picture = ({ title, url, description }) => {
  return (
    <div className="picture">
      <h2>{title}</h2>
      <img className="picture__img" src={url} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default Picture;
