import React, { useEffect, useState } from "react";
import MediaContent from "./MediaContent";
import Preloader from "./../PreLoader";
import ErrorStab from "../ErrorStab";

const MediaContentContainer = ({ date }) => {
  const [publication, getPublication] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=dTAnmKezLULOPHIybC3o5i20G27BlMKfPL3gFFRT&date=${date}`
        );
        if (response.status !== 200) {
          throw new Error();
        } else {
          response = await response.json();
          getPublication(response);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [date]);

  if (isError) {
    return <ErrorStab />;
  } else {
    return isLoading ? (
      <Preloader />
    ) : (
      <MediaContent
        mediaType={publication.media_type}
        description={publication.explanation}
        title={publication.title}
        url={publication.url}
      />
    );
  }
};

export default MediaContentContainer;
