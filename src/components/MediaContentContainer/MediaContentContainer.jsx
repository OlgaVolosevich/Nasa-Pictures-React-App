import React, { useEffect, useState } from "react";
import MediaContent from "./MediaContent";

const MediaContentContainer = ({ date }) => {
  const [publication, getPublication] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=dTAnmKezLULOPHIybC3o5i20G27BlMKfPL3gFFRT&date=${date}`
    )
      .then((response) => response.json())
      .then((object) => getPublication(object));
  }, [date]);

  return publication ? (
    <MediaContent
      mediaType={publication.media_type}
      description={publication.explanation}
      title={publication.title}
      url={publication.url}
    />
  ) : (
    "loading"
  );
};
export default MediaContentContainer;
