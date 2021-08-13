import React from "react";
import { useStateValue } from "../Reducers/StateProvider";
import useUnsplashSearch from "../api/data";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = () => {
  const [{ term }] = useStateValue();
  const { data } = useUnsplashSearch(term);

  return (
    <>
      {term && (
        <div className="image-list pt-5">
          {data
            ? data.map((image) => {
                return <ImageCard key={image.id} image={image} />;
              })
            : ""}
        </div>
      )}
    </>
  );
};

export default ImageList;
