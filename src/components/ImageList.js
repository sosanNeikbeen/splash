import React from "react";
import { useImageValue } from "../context/ImageContext";
import { ToastProvider } from "react-toast-notifications";
import useUnsplashSearch from "../api/data";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = () => {
  const [{ term }] = useImageValue();
  const { data } = useUnsplashSearch(term);

  return (
    <div className="container is-mobile">
      {term && (
        <div className="image-list pt-5">
          {data
            ? data.map((image) => {
                return (
                  <ToastProvider key={image.id}>
                    <ImageCard image={image} />
                  </ToastProvider>
                );
              })
            : ""}
        </div>
      )}
    </div>
  );
};

export default ImageList;
