import React from "react";
import { useImageValue } from "../context/ImageContext";
import { ToastProvider, useToasts } from "react-toast-notifications";
import useUnsplashSearch from "../api/data";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = () => {
  const [{ term }] = useImageValue();
  const { data } = useUnsplashSearch(term);

  return (
    <>
      {term && (
        <div className="image-list pt-5">
          {data
            ? data.map((image) => {
                return (
                  <ToastProvider>
                    <ImageCard key={image.id} image={image} />
                  </ToastProvider>
                );
              })
            : ""}
        </div>
      )}
    </>
  );
};

export default ImageList;
